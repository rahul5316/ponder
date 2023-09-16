import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  let content = null;

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
      break;
  }

  return (
    <View style={styles.container}>
      {content}
      {step < 4 && (
        <Button title="Next" onPress={goToNextStep} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A0060',
  },
});
