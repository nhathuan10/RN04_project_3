import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'

export default function LoginForm({ children, style }) {
    return (
        <View style={{ ...styles.container, ...style }} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.boldGray,
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 600,
        borderRadius: 15,
    },
})