import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'
import Text from '../Text'


export default function Button({ text, style, title, header, normal, textStyle }) {
    return (
        <TouchableOpacity activeOpacity={0.3} style={{ ...styles.container, ...style }}>
            {title && <Text title bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
            {header && <Text header bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
            {normal && <Text bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: COLORS.boldGray,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

