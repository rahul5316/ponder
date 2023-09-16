import { StyleSheet } from 'react-native';

const MeditationTimerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A0060',
    },
    timer: {
        position: 'absolute',
    },
    button: {
        zIndex: 1,
    }
});

export default MeditationTimerStyles;
