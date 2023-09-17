import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

function GuidedMeditationScreen({ navigation }) {
  const [emotion, setEmotion] = useState('');

  const emotions = [
    'Happy', 'Sad', 'Excited', 'Bored', 'Relaxed',
    'Anxious', 'Energetic', 'Tired', 'Motivated', 'Indifferent'
  ];

  return (
    <View style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder="Choose your emotion"
        value={emotion}
        onChangeText={text => setEmotion(text)}
      />

      <View style={styles.optionsContainer}>
        {emotions.map((emotionOption, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.optionButton}
            onPress={() => setEmotion(emotionOption)}
          >
            <Text>{emotionOption}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Next" onPress={() => navigation.navigate('YourNextScreenName')} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    flexBasis: '48%',  // approximately half the container's width
  },
});

export default GuidedMeditationScreen;
