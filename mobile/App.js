import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MeditationTimer from './components/MeditationTimer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MeditationTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
