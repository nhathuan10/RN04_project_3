import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import ShoeIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <ShoeIcon name='shoe-sneaker' size={50} color={COLORS.lightGray} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.main,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    }
})