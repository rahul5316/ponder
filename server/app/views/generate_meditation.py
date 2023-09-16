from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import os
from google.cloud import texttospeech
from bark import SAMPLE_RATE, generate_audio, preload_models
from scipy.io.wavfile import write as write_wav
import nltk
import numpy as np

class GenerateMeditationView(APIView):
    def get(self, request, format=None):
        meditation = self.generate_meditations(request.data)
        # self.google_cloud_tts(meditation)
        self.bark_tts( meditation)
        return Response(meditation)
    
    def generate_meditations(self, data):
        prompt = "Generate a personalized guided meditation for me, please.\n\n"
        if data.get("duration"):
            prompt += "Duration: " + data.get("duration") + "\n"
        if data.get("technique"):
            prompt += "Meditation Technique: " + data.get("technique") + "\n"
        if data.get("context"):
            prompt += "Situation: " + data.get("context") + "\n"
        prompt += "\nPlease create a tailored guided meditation that aligns with my current state and situation using the chosen meditation technique. Make it as personalized as possible. Thank you!"
        
        print('sending request...')
        headers = {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + os.environ.get("OPENAI_API_KEY")
        }
        try:
            res = requests.post(url="https://api.openai.com/v1/chat/completions", headers=headers, json=self.get_json(prompt)).json()["choices"][0]['message']['content']
        except KeyError as e:
            print("error:", e)
            return {"error": "Sorry, I couldn't generate a meditation for you. Please try again."}
        return res
        
    
    def get_json(self, prompt):
        return {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 1.2
        }

    def google_cloud_tts(self, meditation):
        print("creating audio for meditation:", meditation)
        # Instantiates a client
        client = texttospeech.TextToSpeechClient()

        text_prompt = "Close your eyes and take a deep breath in, filling your lungs with fresh air." + \
        "As you exhale, let go of any tension or worry in your body. Feel yourself becoming more relaxed with each breath."
        # Set the text input to be synthesized
        synthesis_input = texttospeech.SynthesisInput(text=text_prompt)

        # Build the voice request, select the language code ("en-US") and the ssml
        # voice gender ("neutral")
        voice = texttospeech.VoiceSelectionParams(
            name="en-GB-Neural2-D", language_code="en-GB"
        )

        # Select the type of audio file you want returned
        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3,
            speaking_rate=0.95,
            # pitch=0.95,
        )

        # Perform the text-to-speech request on the text input with the selected
        # voice parameters and audio file type
        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )

        # The response's audio_content is binary.
        with open("../mobile/assets/meditation.mp3", "wb") as out:
            # Write the response to the output file.
            out.write(response.audio_content)
            print('Audio content written to file "output.mp3"')
    
    def bark_tts(self, meditation):
        # download and load all models
        preload_models()
        nltk.download('punkt')
        # generate audio from text
        text_prompt = "Close your eyes and take a deep breath in, filling your lungs with fresh air." + \
            "As you exhale, let go of any tension or worry in your body. Feel yourself becoming more relaxed with each breath." + \
            "Visualize a peaceful, serene place in your mind. It could be a beach, a forest, or any place where you feel calm and safe." + \
            "Imagine yourself standing in this peaceful place, feeling a sense of tranquility and confidence." + \
            "Now, bring your focus to your upcoming project presentation. Acknowledge the worry and anxiety you're feeling about it." + \
            "Take a moment to explore why you're feeling worried. Is it fear of failure, judgment, or the unknown?" + \
            "Remind yourself that it's normal to feel nervous before a big presentation. You are capable and well-prepared." + \
            "Envision a bubble of calm and confidence surrounding you. See it growing stronger with each breath you take." + \
            "Visualize yourself giving the presentation with ease and confidence. Imagine the audience engaged and supportive." + \
            "Take another deep breath and as you exhale, release any remaining tension or doubt. You are ready for this." + \
            "Now, gently open your eyes and return to the present moment with a sense of calm and confidence." + \
            "Carry this feeling of inner peace and assurance with you as you prepare for your presentation."
        sentences = nltk.sent_tokenize(text_prompt)
        silence = np.zeros(int(2 * SAMPLE_RATE))
        speaker = "v2/en_speaker_3"
        pieces = []
        for sentence in sentences:
            audio_array = generate_audio(sentence, history_prompt=speaker)
            pieces += [audio_array, silence.copy()]
        audio = np.concatenate(pieces)
        # speech_array = generate_audio(text_prompt, history_prompt=speaker)

        # play text in notebook
        write_wav("../meditation_speaker_3.wav", SAMPLE_RATE, audio)


        