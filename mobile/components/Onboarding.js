// Onboarding.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const Onboarding = ({ navigation }) => {
  const [step, setStep] = useState(1);

  let content;

  content = (
    content =
      <View>
        <Button title="Skip" onPress={() => navigation.navigate('HomeScreen')} />
        <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100 }} />
        <Text>welcome to ponder {'\n'}{'\n'}</Text>
        <Text>{'\n'}{'\n'}An AI-powered meditation app designed to be your trusted companion on your path to inner peace and self-discovery. {'\n'}{'\n'}In a world where daily stresses often pull us away from our true selves, Ponder is here to guide you back to a place of serenity and balance.</Text>
      </View>
  );

return (
    <View style={styles.container}>
      {content}
      <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} />
      <Image source={require('../assets/dots.png')} style={{ width: 70, height: 11.5 }} />
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
