import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeditationTimer from './components/MeditationTimer';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';
import Onboarding4 from './components/Onboarding4';
import HomeScreen from './components/HomeScreen';
import PonderQuestionPage from './components/PonderQuestionPage';
import Duration from './components/Duration';

const emotions = [
  "Happy", "Sad", "Angry", "Confident", "Worried",
  "Relaxed", "Stressed", "Excited", "Bored", "Indifferent"
];

// function GuidedMeditationScreen({ navigation }) {
//   const [selectedEmotion, setSelectedEmotion] = useState('');

//   return (
//     <View style={styles.page}>
//       <TextInput 
//         placeholder="Choose your emotion..." 
//         style={styles.textInput} 
//         value={selectedEmotion}
//         onChangeText={text => setSelectedEmotion(text)}
//       />

//       <View style={styles.emotionContainer}>
//         {emotions.map((emotion, index) => (
//           <TouchableOpacity 
//             key={index}
//             style={styles.emotionOption} 
//             onPress={() => setSelectedEmotion(emotion)}
//           >
//             <Text>{emotion}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <Button title="Next" onPress={() => navigation.navigate('WeeklyChallenges')} />
//     </View>
//   );
// }
function GuidedMeditationScreen({ navigation }) {
  const [selectedEmotion, setSelectedEmotion] = useState('');

  return (
    <View style={styles.page}>
      <TextInput
        placeholder="Choose your emotion..."
        style={styles.textInput}
        value={selectedEmotion}
        onChangeText={text => setSelectedEmotion(text)}
      />

      <View style={styles.emotionContainer}>
        {emotions.map((emotion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.emotionOption}
            onPress={() => setSelectedEmotion(emotion)}
          >
            <Text>{emotion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Next" onPress={() => navigation.navigate('PonderQuestion')} />
    </View>
  );
}

function WeeklyChallenges() {
  return (
    <View style={styles.page}>
      <Text>Weekly Challenges Screen</Text>
    </View>
  );
}

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
          name="GuidedMeditation"
          component={GuidedMeditationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PonderQuestion"
          component={PonderQuestionPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Duration"
          component={Duration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MeditationTimer"
          component={MeditationTimer}
          options={{ headerShown: false, title: 'Meditation Timer' }}
        />
        <Stack.Screen
          name="WeeklyChallenges"  // Modified this line
          component={WeeklyChallenges}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Book"
          component={BookScreen}
          options={{ headerShown: false }}
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
    padding: 20
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20
  },
  emotionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  emotionOption: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: '48%'
  }
});
