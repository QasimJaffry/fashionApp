import React from 'react';
import { View } from 'react-native'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

const Dot = ({ index, currentIndex }) => {
    const opacity = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP
    })
    const scale = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1.25, 0.5],
        extrapolate: Extrapolate.CLAMP
    })
    return (
        <Animated.View style={{ opacity, backgroundColor: '#2CB980', width: 8, borderRadius: 4, height: 8, margin: 4, transform: [{ scale }] }} />
    )
}

export default Dot