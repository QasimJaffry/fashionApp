import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    subContainer: {
        backgroundColor: 'white',
        width: 44,
        height: 44,
        borderRadius: 22, alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,

    }
})

const SocialIcon = ({ children, color }) => {
    return (
        <View style={styles.subContainer}>
            <AntDesign name={children} size={24} color={color} />
        </View>
    )
}

const SocialLogin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={require('../../../assets/google.png')} style={{ height: 25, width: 25 }} />
            </View>
            <SocialIcon children='facebook-square' color='#3b5998' />
            <SocialIcon children='apple1' color='black' />
        </View>
    )
}


export default SocialLogin