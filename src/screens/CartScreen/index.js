import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CartScreen({navigation}) {
    return (
        <View >
            <Text onPress={() => navigation.goBack()}>CartScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})