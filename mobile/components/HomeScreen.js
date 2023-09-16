import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

function Card({ title, description, buttonText, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.page}>
      <Card 
        title="Guided Meditation"
        description={`How are you feeling today, [Name]?`}
        buttonText="Check in"
        onPress={() => navigation.navigate('GuidedMeditation')}
      />
      <Card 
        title="Weekly Challenges"
        description={`Self-Compassion Practice\n\nWrite a letter of self-compassion to yourself, acknowledging your strengths and forgiving your imperfections.`}
        buttonText="View"
        onPress={() => navigation.navigate('WeeklyChallenges')}
      />
      <Card 
        title="Journal"
      />
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
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  homeIcon: {
    width: 29,
    height: 26,
    flexShrink: 0,
    backgroundColor: "lightgray",
  },
});