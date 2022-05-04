import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'

export default function ShoeItem({ item, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                padding: 10,
                borderRadius: 25,
                backgroundColor: COLORS.lightGray,
                elevation: 6
            }}
        >
            <Image
                source={{ uri: item.image }}
                style={{ width: 150, height: 150 }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})