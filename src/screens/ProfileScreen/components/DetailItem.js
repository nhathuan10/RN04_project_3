import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '../../../components'

export default function DetailItem({ item, onPress }) {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', width: 400, padding: 10 }} onPress={onPress}>
            {item.img}
            <Text style={{ marginLeft: 15 }} title>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})