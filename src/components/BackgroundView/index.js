import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'

export default function BackgroundView() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            {this.props.children}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray,
        flex: 1,
    }
})