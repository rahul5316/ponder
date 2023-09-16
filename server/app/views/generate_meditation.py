from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import os

class GenerateMeditationView(APIView):
    def get(self, request, format=None):
        meditation = self.generate_meditations(request.data)
        self.create_autio(meditation)
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

    def create_autio(self, meditation):
        print("creating audio for meditation:", meditation)


        