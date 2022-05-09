import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import { TextInput, Text } from '../../../components'
import { useDispatch } from 'react-redux'
import { setAvatar } from '../../../redux/actions/action'
import { useState } from 'react'

export default function ModalItem({ setNameHandler, setEmailHandler, modalVisibleHandler, name, email, profileList }) {
    const dispatch = useDispatch();
    const [avatarFocus, setAvatarFocus] = useState();

    const avatarFocusHandler = (item) => {
        dispatch(setAvatar(item));
        setAvatarFocus(item);
    }

    const renderProfile = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => avatarFocusHandler(item)}>
                <Image
                    source={item}
                    style={[styles.avatar, (avatarFocus === item) && styles.avatarFocus]}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Name</Text>
                <TextInput style={{ width: 280 }} onChangeText={(text) => setNameHandler(text)} value={name} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput style={{ width: 280 }} onChangeText={(text) => setEmailHandler(text)} value={email} />
            </View>
            <FlatList
                data={profileList}
                renderItem={renderProfile}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, marginVertical: 10, marginHorizontal: 10 }}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            />
            <TouchableOpacity onPress={modalVisibleHandler}>
                <Text bold title style={{ alignSelf: 'center' }}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 380,
        width: 380,
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
    },
    avatar: {
        height: 140,
        width: 140,
        borderRadius: 15
    },
    avatarFocus: {
        borderWidth: 4,
        borderColor: COLORS.main
    }
})