import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailScreen({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.goBack()}>DetailScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})