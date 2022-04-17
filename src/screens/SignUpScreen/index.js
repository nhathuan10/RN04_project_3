import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { stackName } from '../../configs/navigationConstants'
import Text from '../../components/Text'
import Button from '../../components/Button'
import { COLORS } from '../../themes'
import BackgroundView from '../../components/BackgroundView'
import TextInput from '../../components/TextInput'

export default function SignUpScreen({ navigation }) {

    return (
        <BackgroundView style={styles.container}>
            <View style={styles.loginForm}>
                <TextInput title='Email' />
                <TextInput title='Password' password secureTextEntry />
                <TextInput title='Name' />
                <TextInput title='Phone' />
                <Button text='Sign Up' title style={{ width: '90%',  marginTop: 10, backgroundColor: COLORS.regularGray}} />
                <TouchableOpacity>
                    <Text style={{ color: COLORS.lightGray, marginTop: 15 }}  >Already have an account</Text>
                </TouchableOpacity>
            </View>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        backgroundColor: COLORS.boldGray,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 500,
        borderRadius: 15,
    }
})