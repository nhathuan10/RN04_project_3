import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stackName } from '../../configs/navigationConstants'

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate(stackName.detailStack)}>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})