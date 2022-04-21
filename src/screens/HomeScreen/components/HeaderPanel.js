import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackgroundView } from '../../../components'
import { COLORS } from '../../../themes'

export default function HeaderPanel() {
    return (
        <View style={styles.bigItem}>
            <View style={styles.smallItem}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    bigItem: {
        backgroundColor: COLORS.main,
        height: "35%",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 100,
    },
    smallItem: {
        backgroundColor: COLORS.main,
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        right: -25,
        bottom: -25,
    }
})