import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '../../../components'
import { COLORS } from '../../../themes'

export default function SizeItem({ item, sizeFocus, onPressSizeFocus }) {
    return (
        <TouchableOpacity
            style={{ ...styles.container, backgroundColor: (sizeFocus === item) ? COLORS.main : null }}
            onPress={() => onPressSizeFocus(item)}
        >
            <Text style={{ color: (sizeFocus === item) ? COLORS.lightGray : null }}>{item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 8,
    }
})