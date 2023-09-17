import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Challenge = ({ title, description, buttonText, color }) => {
  return (
    <View style={{ ...styles.card, backgroundColor: color }}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity style={{ ...styles.cardButton }}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Challenge;

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
