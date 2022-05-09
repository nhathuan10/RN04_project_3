import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import UserEditIcon from 'react-native-vector-icons/FontAwesome5'
import { Text } from '../../../components'
import { Profile } from '../../../assets/images'

export default function ProfileAvatar({name, email, modalVisibleHandler}) {
    return (
        <View style={styles.container}
        >
            <Image
                source={Profile}
                style={{ height: 110, width: 110, borderRadius: 55 }}
            />
            <Text title bold>{name}</Text>
            <Text subText italic>{email}</Text>
            <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }} onPress={modalVisibleHandler}>
                <UserEditIcon name='user-edit' size={22} color={COLORS.main} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 240,
        width: 350,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 7,
        marginVertical: 10
    }
})