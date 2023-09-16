import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Modal } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const MeditationTimer = () => {
    const DURATION = 60; // seconds

    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);
    const [remainingTime, setRemainingTime] = useState(DURATION);
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
    };

    useEffect(() => {
        let interval;
        if (isActive && remainingTime > 0) {
            interval = setInterval(() => {
                setProgress((DURATION - remainingTime + 1) / DURATION);
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            if (remainingTime === 0) {
                setIsActive(false);
                setProgress(0);
                setRemainingTime(DURATION);
            }
        }

        return () => clearInterval(interval);
    }, [isActive, remainingTime]);

    // Format time to minutes:seconds
    const formatTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <View style={styles.container}>
            <Svg width="200" height="200" style={styles.timer} viewBox="0 0 200 200">
                <Circle
                    cx="100"
                    cy="100"
                    r="95"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                    strokeDasharray={`${progress * Math.PI * 2 * 95} 600`}
                />
            </Svg>
            <Text style={styles.countdown}>{formatTime(remainingTime)}</Text>
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
        marginTop: 10,
    },
    countdown: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 350,
    }
});

export default MeditationTimer;
