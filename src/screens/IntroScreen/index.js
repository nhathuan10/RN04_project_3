import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stackName } from '../../configs/navigationConstants'

export default function IntroScreen({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate(stackName.signUpStack)}>Intro</Text>
        </View>
    )
}

const styles = StyleSheet.create({})