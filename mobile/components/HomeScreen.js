// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Sample Home Screen
// function HomeScreen() {
//   return (
//     <View style={styles.page}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// // Sample Challenges Screen
// function ChallengesScreen() {
//   return (
//     <View style={styles.page}>
//       <Text>Challenges Screen</Text>
//     </View>
//   );
// }

// // Sample Book Screen
// function BookScreen() {
//   return (
//     <View style={styles.page}>
//       <Text>Book Screen</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//       <Tab.Navigator>
//         <Tab.Screen name="Challenges" component={ChallengesScreen} />
//         <Tab.Screen name="Book" component={BookScreen} />
//       </Tab.Navigator>
  
//   );
// }

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// Sample Home Screen
function HomeScreen() {
  return (
    <View style={styles.page}>
      <Text>Home Screen</Text>
    </View>
  );
}

// Meditation Screen as a placeholder for navigation
function MeditationScreen() {
  const navigation = useNavigation();
  // Navigate to MeditationTimer when this screen is focused
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.navigate('MeditationTimer');
    });

    return unsubscribe;
  }, [navigation]);

  return null; // Return null as this is just a placeholder
}

// Sample Challenges Screen
function ChallengesScreen() {
  return (
    <View style={styles.page}>
      <Text>Challenges Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <View style={styles.homeIcon}></View> // Your custom style for the home icon
          ),
        }}
      />
      <Tab.Screen 
        name="Meditation" 
        component={MeditationScreen} 
        options={{ tabBarLabel: 'Meditate' }}
      />
      <Tab.Screen 
        name="Challenges" 
        component={ChallengesScreen} 
        options={{ tabBarLabel: 'Challenges' }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    width: 29,
    height: 26,
    flexShrink: 0,
    backgroundColor: 'lightgray', // You might need to modify this as per your image
    // Add more styles if necessary
  },
});
