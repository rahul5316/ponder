import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

function Card({ title, description, buttonText, onPress, color, buttonColor }) {
  return (
    <View style={{ ...styles.card, backgroundColor: color }}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity
        style={{ ...styles.cardButton, backgroundColor: buttonColor }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Text style={{ color: "white", fontSize: 24, display: "flex" }}>
        <Text style={{ flexDirection: "row" }}>Happy Sunday,</Text>
        <Text style={{ flexDirection: "row" }}>Sebastian</Text>
      </Text>
      <Card
        title="Guided Meditation"
        description={`How are you feeling today, [Name]?`}
        buttonText="Check in"
        color="#D847AF"
        buttonColor="rgba(29, 0, 65, 0.49)"
        onPress={() => navigation.navigate("GuidedMeditation")}
      />
      <Card
        title="Weekly Challenges"
        description={`Self-Compassion Practice\n\nWrite a letter of self-compassion to yourself, acknowledging your strengths and forgiving your imperfections.`}
        buttonText="View"
        color="#1DAABD"
        buttonColor="rgba(29, 0, 65, 0.49)"
        onPress={() => navigation.navigate("WeeklyChallenges")}
      />
      <Card
        title="Journal"
        color="#FF8A00"
        buttonColor="rgba(29, 0, 65, 0.49)"
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A0060" }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <View style={styles.homeIcon}></View>,
            headerShown: false,
            tabBarStyle: { backgroundColor: "#2A0060" },
          }}
        />
        <Tab.Screen
          name="Meditation"
          component={MeditationScreen}
          options={{ tabBarLabel: "Meditate" }}
        />
        <Tab.Screen
          name="Challenges"
          component={ChallengesScreen}
          options={{
            tabBarLabel: "Challenges",
            headerShown: false,
            tabBarStyle: { backgroundColor: "#2A0060" },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: "100%",
    padding: 20,
    backgroundColor: "#2A0060",
  },
  card: {
    // borderWidth: 1,
    // borderColor: "lightgray",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
    color: "white",
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  cardButton: {
    backgroundColor: "#3498db",
    padding: 10,
    alignItems: "center",
    width: 217,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  homeIcon: {
    width: 29,
    height: 26,
    flexShrink: 0,
    backgroundColor: "lightgray",
  },
});
