import { StyleSheet, Text, View, TextInput as TEXTINPUT, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../themes/'
import PassIcon from 'react-native-vector-icons/Entypo'

export default function TextInput(props) {
    const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);
    return (
        <View style={styles.container}>
            <TEXTINPUT
                {...props}
                style={styles.textInput}
                secureTextEntry={secureTextEntry}
            />
            <Text style={styles.title}>{props.title}</Text>
            {props.password && (
                <TouchableOpacity style={styles.passIcon} onPress={() => setSecureTextEntry(!secureTextEntry)} >
                    <PassIcon name='eye' size={25} color={COLORS.semiBoldGray}/>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    textInput: {
        borderColor: COLORS.lightGray,
        borderWidth: 2,
        borderRadius: 12,
        width: '90%',
        color: COLORS.semiBoldGray,
        fontSize: 17,
        padding: 12,
        width: '90%',
        backgroundColor: COLORS.lightGray,
        fontFamily: 'Nunito-Bold',
    },
    title: {
        position: 'absolute',
        top: 4,
        left: 30,
        fontFamily: 'Nunito-Bold',
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.main,
    },
    passIcon: {
        position: 'absolute',
        right: 30,
    }
})