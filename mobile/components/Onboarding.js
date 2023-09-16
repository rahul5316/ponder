// Onboarding.js
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Onboarding = ({ step, setStep }) => {
  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => prev - 1);

  let content;

  switch (step) {
    case 1:
      content = <Text>Step 1</Text>;
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
  timer: {
      position: 'absolute',
  },
  button: {
      zIndex: 1,
  }
});

export default Onboarding;
