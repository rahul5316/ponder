import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeditationTimer from './components/MeditationTimer';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';
import Onboarding4 from './components/Onboarding4';
import HomeScreen from './components/HomeScreen';

function ChallengesScreen() {
  return (
    <View style={styles.page}>
      <Text>Challenges Screen</Text>
    </View>
  );
}

function BookScreen() {
  return (
    <View style={styles.page}>
      <Text>Book Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding2" 
          component={Onboarding2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding3" 
          component={Onboarding3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding4" 
          component={Onboarding4} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Challenges" 
          component={ChallengesScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Book" 
          component={BookScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MeditationTimer" 
          component={MeditationTimer} 
          options={{ headerShown: false, title: 'Meditation Timer' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

