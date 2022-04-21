import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import ShoeIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header({onPress}) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={{
                backgroundColor: COLORS.main,
                height: 60,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingHorizontal: 5
            }}
        >
            <ShoeIcon name='shoe-sneaker' size={50} color={COLORS.lightGray} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})