import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function PonderQuestionPage({ navigation }) {
  const [answer, setAnswer] = useState('');

  return (
    <View style={styles.page}>
      <Text style={styles.questionText}>"What brings you to ponder?"</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={8}
        value={answer}
        onChangeText={text => setAnswer(text)}
        placeholder="Share your thoughts..."
      />
      <Button title="Next" onPress={() => navigation.navigate('Duration')} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    width: '100%',
    padding: 10, 
    paddingTop: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    textAlignVertical: 'top' 
  }
});

export default PonderQuestionPage;
