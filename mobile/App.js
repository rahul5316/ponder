import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MeditationTimer from './components/MeditationTimer';
import Onboarding from './components/Onboarding'; // Import the Onboarding component

export default function App() {
  const [step, setStep] = useState(1); // Initialize step state for onboarding

  if (step <= 4) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Onboarding step={step} setStep={setStep} />
        {step === 4 && (
          <Button
            title="Next"
            onPress={() => setStep(5)} // Setting step to 5 will navigate to MeditationTimer
          />
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MeditationTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
