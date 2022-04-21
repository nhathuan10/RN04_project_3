import { StatusBar, StyleSheet, Animated, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'

export default function BackgroundView({ children, style }) {
    return (
        <View style={{ ...styles.container, ...style }}>
            <StatusBar barStyle='light-content' />
            {children}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray,
        flex: 1,
        padding: 10,
    }
})