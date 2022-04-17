import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import LinearGradient from 'react-native-linear-gradient'

export default function DoneButton({ onDone }) {
    return (
        <LinearGradient 
            colors={[COLORS.lightGray, COLORS.regularGray]} 
            style={styles.container}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
        >
            <TouchableOpacity
                onPress={onDone}
                activeOpacity={0.3}
            >
                <Text style={styles.text}>
                    Let's get started
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        color: COLORS.boldGray,
        backgroundColor: COLORS.lightGray,
        borderRadius: 10
    },
    text: {
        fontFamily: 'Nunito-Bold',
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.boldGray,
    }
})