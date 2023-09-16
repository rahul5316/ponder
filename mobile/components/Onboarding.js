// Onboarding.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Onboarding = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => prev - 1);

  let content;

  switch (step) {
    case 1:
      content = <Text>An AI-powered meditation app designed to be your trusted companion on your path to inner peace and self-discovery. In a world where daily stresses often pull us away from our true selves, Ponder is here to guide you back to a place of serenity and balance.</Text>;
      break;
    case 2:
      content = (
        <>
          <Button title="Back" onPress={goToPreviousStep} />
          <Text>Step 2</Text>
        </>
      );
      break;
    case 3:
      content = (
        <>
          <Button title="Back" onPress={goToPreviousStep} />
          <Text>Step 3</Text>
        </>
      );
      break;
    case 4:
      content = (
        <>
          <Button title="Back" onPress={goToPreviousStep} />
          <Text>Step 4</Text>
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
