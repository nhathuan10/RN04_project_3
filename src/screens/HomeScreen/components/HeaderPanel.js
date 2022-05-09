import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'

export default function HeaderPanel({ style, smallItem }) {
    return (
        <View style={{ ...styles.bigItem, ...style }}>
            {smallItem && (
                <View style={styles.smallItem}></View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    bigItem: {
        backgroundColor: COLORS.main,
        height: 240,
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
        right: -45,
        bottom: -35,
    }
})