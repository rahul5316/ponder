import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const MeditationTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);
    const [sound, setSound] = useState();

    useEffect(() => {
      async function setupAudio() {
        try {
          await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            staysActiveInBackground: true,
            shouldDuckAndroid: true,
          });
      
          const soundInstance = new Audio.Sound();
          const soundAsset = Asset.fromModule(require('../assets/output2.wav'));
          await soundInstance.loadAsync(soundAsset);
          setSound(soundInstance);
          await soundInstance.playAsync();
        } catch (error) {
          console.error("Error setting up audio:", error);
        }
      }
      setupAudio();
    }, []);

    async function playSound() {
        try {
            await sound.replayAsync();
        } catch (error) {
            console.error("Error playing sound:", error);
        }
    }

    const handlePress = async () => {
        if (isActive) {
            sound && await sound.pauseAsync();  
        } else {
            sound && await sound.playAsync(); 
        }
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval;
        if (isActive && progress < 1) {
            interval = setInterval(() => {
                setProgress(prevProgress => prevProgress + 0.01); 
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, progress]);

    return (
        <View style={styles.container}>
            <Svg width="200" height="200" style={styles.timer}>
                <Circle
                    cx="100"
                    cy="100"
                    r="95"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray={`${progress * Math.PI * 2 * 95} 600`}
                />
            </Svg>
            <Button
                title={isActive ? 'Pause' : 'Start'}
                onPress={handlePress}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        position: 'absolute',
    },
    button: {
        zIndex: 1,
    }
});

export default MeditationTimer;