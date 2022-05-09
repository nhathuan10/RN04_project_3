import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import { TextInput, Text } from '../../../components'

export default function ModalItem({ setNameHandler, setEmailHandler, modalVisibleHandler, name, email }) {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Name</Text>
                <TextInput style={{ width: 300 }} onChangeText={(text) => setNameHandler(text)} value={name} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput style={{ width: 300 }} onChangeText={(text) => setEmailHandler(text)} value={email} />
            </View>
            <TouchableOpacity onPress={modalVisibleHandler}>
                <Text bold title style={{ alignSelf: 'center' }}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 230,
        width: 390,
        backgroundColor: COLORS.semiLightGray,
        marginTop: 80,
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 5
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})