import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

const MeditationTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);  // 0 to 1

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
                onPress={() => setIsActive(!isActive)}
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
