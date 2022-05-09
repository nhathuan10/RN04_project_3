import { FlatList, Modal, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import HeaderPanel from '../HomeScreen/components/HeaderPanel'
import { BackgroundView, Text } from '../../components'
import { COLORS } from '../../themes'
import { details } from './components/Details'
import DetailItem from './components/DetailItem'
import ProfileAvatar from './components/ProfileAvatar'
import ModalItem from './components/ModalItem'
import { stackName } from '../../configs/navigationConstants'

export default function ProfileScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('Huan Phan');
    const [email, setEmail] = useState('huan@gmail.com');

    const setNameHandler = (text) => {
        setName(text);
    }

    const setEmailHandler = (text) => {
        setEmail(text);
    }

    const modalVisibleHandler = () => {
        setModalVisible(!modalVisible);
    }

    const renderItem = ({ item, index }) => {
        if (index === 4) {
            return (
                <DetailItem item={item} onPress={() => navigation.navigate(stackName.loginStack)} />
            )
        } else {
            return (
                <DetailItem item={item} />
            )
        }
    }

    return (
        <BackgroundView style={{ alignItems: 'center' }}>
            <HeaderPanel style={{ height: 180 }} />
            <View>
                <Text bold header style={{ color: COLORS.lightGray }}>Profile</Text>
            </View>
            <ProfileAvatar name={name} email={email} modalVisibleHandler={modalVisibleHandler} />
            <FlatList
                data={details}
                renderItem={renderItem}
                style={{ marginTop: 15 }}
            />
            <Modal visible={modalVisible} transparent>
                <ModalItem
                    modalVisibleHandler={modalVisibleHandler}
                    setNameHandler={setNameHandler}
                    setEmailHandler={setEmailHandler}
                    name={name}
                    email={email}
                />
            </Modal>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({})