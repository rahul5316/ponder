// Onboarding3.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const Onboarding3 = ({ navigation }) => {
  const [step, setStep] = useState(1);

  let content;

  content = (
    <>
      <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Back" onPress={() => navigation.navigate('Onboarding2')} />
      <Text>Mindfulness Weekly Challenges {'\n'}{'\n'}</Text>
      <Image source={require('../assets/placeholder.png')} style={{ width: 500, height: 200 }} />
      <Text>{'\n'}{'\n'}Cultivate a habit of mindfulness and kindness with our weekly challenges, also generated using AI. From gratitude practices, to acts of kindness, these challenges inspire you to bring mindfulness into your daily life, fostering a sense of connection and well-being.</Text>
    </>
  );

return (
    <View style={styles.container}>
      {content}
      <Button title="Next" onPress={() => navigation.navigate('Onboarding4')} />
      <Image source={require('../assets/dots3.png')} style={{ width: 70, height: 11.5 }} />
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

export default Onboarding3;