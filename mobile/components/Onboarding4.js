// Onboarding4.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const Onboarding4 = ({ navigation }) => {
  const [step, setStep] = useState(1);

  let content;

  content = (
    <>
      <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Back" onPress={() => navigation.navigate('Onboarding3')} />
      <Text>Journals for Reflection {'\n'}{'\n'}</Text>
      <Image source={require('../assets/placeholder.png')} style={{ width: 500, height: 200 }} />
      <Text>{'\n'}{'\n'}Reflect on your journey, document your progress, and gain insights into your thoughts and emotions. Whether you're journaling your meditation experiences or simply jotting down your daily reflections, our journaling feature is a safe space for self-expression.</Text>
      <Button title="Start" onPress={() => navigation.navigate('HomeScreen')} />

    </>
  );

return (
    <View style={styles.container}>
      {content}
      <Image source={require('../assets/dots4.png')} style={{ width: 70, height: 11.5 }} />
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

export default Onboarding4;