import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

function GuidedMeditationScreen({ navigation }) {
  const [emotion, setEmotion] = useState("");

  const emotions = [
    "Happy",
    "Sad",
    "Excited",
    "Bored",
    "Relaxed",
    "Anxious",
    "Energetic",
    "Tired",
    "Motivated",
    "Indifferent",
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.page}>
        <TextInput
          style={styles.input}
          placeholder="Choose your emotion"
          value={emotion}
          onChangeText={(text) => setEmotion(text)}
        />

        <View style={styles.optionsContainer}>
          {emotions.map((emotionOption, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => {
                setEmotion(emotionOption);
              }}
            >
              <Text>{emotionOption}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button
          title="Next"
          onPress={() => navigation.navigate("Home")}
          disabled={!emotion} // Disable if 'emotion' is an empty string
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2A0060",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%", // make sure it covers full width
    height: "100%", // make sure it covers full height
  },
  input: {
    width: 256,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    flexBasis: "48%",
  },
});

export default GuidedMeditationScreen;
