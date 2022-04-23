import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'
import Text from '../Text'


export default function Button({ text, style, title, header, normal, textStyle, onPressSignUp, onPressLogIn, onPressAddToCart }) {
    if (onPressSignUp) {
        return (
            <TouchableOpacity activeOpacity={0.3} style={{ ...styles.container, ...style }} onPress={onPressSignUp} >
                {title && <Text title bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
                {header && <Text header bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
                {normal && <Text bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
            </TouchableOpacity>
        )
    } else if (onPressLogIn) {
        return (
            <TouchableOpacity activeOpacity={0.3} style={{ ...styles.container, ...style }} onPress={onPressLogIn} >
                {title && <Text title bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
                {header && <Text header bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
                {normal && <Text bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
            </TouchableOpacity>
        )
    } else if (onPressAddToCart){
        return (
            <TouchableOpacity activeOpacity={0.3} style={{ ...styles.container, ...style }} onPress={onPressAddToCart} >
                {title && <Text title bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
                {header && <Text header bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
                {normal && <Text bold style={{ color: COLORS.lightGray, ...textStyle }}>{text}</Text>}
            </TouchableOpacity>
        )
    }
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

