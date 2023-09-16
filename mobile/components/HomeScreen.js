import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  return (
    <View style={styles.page}>
      <Text>Home Screen</Text>
    </View>
  );
}


function MeditationScreen() {
  const navigation = useNavigation();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      navigation.navigate("MeditationTimer");
    });

    return unsubscribe;
  }, [navigation]);

  return null;
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
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <View style={styles.homeIcon}></View> 
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIcon: {
    width: 29,
    height: 26,
    flexShrink: 0,
    backgroundColor: "lightgray",
  },
});
