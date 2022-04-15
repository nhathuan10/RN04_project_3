import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stackName } from '../../configs/navigationConstants'

export default function LoginScreen({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate(stackName.homeStack)}>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({})