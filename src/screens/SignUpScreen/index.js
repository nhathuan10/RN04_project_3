import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stackName } from '../../configs/navigationConstants'

export default function SignUpScreen({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate(stackName.loginStack)}>SignUp</Text>
        </View>
    )
}

const styles = StyleSheet.create({})