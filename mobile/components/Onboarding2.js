// Onboarding2.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const Onboarding2 = ({ navigation }) => {
  const [step, setStep] = useState(1);

  let content;

  content = (
    <>
      <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Back" onPress={() => navigation.navigate('Onboarding')} />
      <Text>Personalized Guided Meditations {'\n'}{'\n'}</Text>
      <Image source={require('../assets/placeholder.png')} style={{ width: 500, height: 200 }} />
      <Text>{'\n'}{'\n'}Our AI tailors meditation sessions specifically for you. Whether you're looking for relaxation, stress relief, or personal growth, Ponder crafts each meditation to resonate with your unique preferences and current emotional state.</Text>
    </>
  );

return (
    <View style={styles.container}>
      {content}
      <Button title="Next" onPress={() => navigation.navigate('Onboarding3')} />
      <Image source={require('../assets/dots2.png')} style={{ width: 70, height: 11.5 }} />
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

export default Onboarding2;