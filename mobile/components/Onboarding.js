// Onboarding.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const Onboarding = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => prev - 1);

  let content;

  switch (step) {
    case 1:
      content =
      <View>
        <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
        <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100 }} />
        <Text>welcome to ponder {'\n'}{'\n'}</Text>
        <Text>{'\n'}{'\n'}An AI-powered meditation app designed to be your trusted companion on your path to inner peace and self-discovery. {'\n'}{'\n'}In a world where daily stresses often pull us away from our true selves, Ponder is here to guide you back to a place of serenity and balance.</Text>
      </View>
      break;
    case 2:
      content = (
        <>
          <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
          <Button title="Back" onPress={goToPreviousStep} />
          <Text>Personalized Guided Meditations {'\n'}{'\n'}</Text>
          <Image source={require('../assets/placeholder.png')} style={{ width: 500, height: 200 }} />
          <Text>{'\n'}{'\n'}Our AI tailors meditation sessions specifically for you. Whether you're looking for relaxation, stress relief, or personal growth, Ponder crafts each meditation to resonate with your unique preferences and current emotional state.</Text>
        </>
      );
      break;
    case 3:
      content = (
        <>
          <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
          <Button title="Back" onPress={goToPreviousStep} />
          <Text>Mindfulness Weekly Challenges {'\n'}{'\n'}</Text>
          <Image source={require('../assets/placeholder.png')} style={{ width: 500, height: 200 }} />
          <Text>{'\n'}{'\n'}Cultivate a habit of mindfulness and kindness with our weekly challenges, also generated using AI. From gratitude practices, to acts of kindness, these challenges inspire you to bring mindfulness into your daily life, fostering a sense of connection and well-being.</Text>
        </>
      );
      break;
    case 4:
      content = (
        <>
          <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
          <Button title="Back" onPress={goToPreviousStep} />
          <Text>Journals for Reflection {'\n'}{'\n'}</Text>
          <Image source={require('../assets/placeholder.png')} style={{ width: 500, height: 200 }} />
          <Text>{'\n'}{'\n'}Reflect on your journey, document your progress, and gain insights into your thoughts and emotions. Whether you're journaling your meditation experiences or simply jotting down your daily reflections, our journaling feature is a safe space for self-expression.</Text>
          <Button title="Start" onPress={() => navigation.navigate('HomeScreen')} />

        </>
      );
      break;
    default:
      content = <Text>Step 1</Text>;
  }

  return (
    <View style={styles.container}>
      {content}
      {step < 4 && (
        <Button title="Next" onPress={goToNextStep} />
      )}
      {step === 1 && (
        <Image source={require('../assets/dots.png')} style={{ width: 70, height: 11.5 }} />
      )}
      {step === 2 && (
        <Image source={require('../assets/dots2.png')} style={{ width: 70, height: 11.5 }} />
      )}
      {step === 3 && (
        <Image source={require('../assets/dots3.png')} style={{ width: 70, height: 11.5 }} />
      )}
      {step === 4 && (
        <Image source={require('../assets/dots4.png')} style={{ width: 70, height: 11.5 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export default Onboarding;
