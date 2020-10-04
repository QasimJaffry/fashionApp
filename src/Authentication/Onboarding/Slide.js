import React from 'react'
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native'
const { width, height } = Dimensions.get('window')
export const HEIGHT_SLIDE = 0.61 * height
export const BORDER_RADIUS = 75
const styles = StyleSheet.create({
    container: {
        width,
        overflow: 'hidden'
    },
    title: {
        fontSize: 80,
        //fontFamily: 'SFProtext-Bold',

        textAlign: 'center',
        lineHeight: 80
    },
    titleContainer: {

        height: 100,
        justifyContent: 'center',
    },


})

const Slide = ({ label, right, photo, index }) => {
    const transform = [
        {
            translateY: (HEIGHT_SLIDE - 100) / 2
        }, {
            translateX: right ? (width / 2 - 50) : (-width / 2 + 50)
        }, {
            rotate: right ? '-90deg' : '90deg'
        }
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={{ ...styles.title, color: 'white' }}>
                    {label}
                </Text>
            </View>

        </View>
    )
}

export default Slide