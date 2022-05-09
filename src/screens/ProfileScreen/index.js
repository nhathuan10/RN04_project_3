import { FlatList, Modal, StyleSheet, View, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import HeaderPanel from '../HomeScreen/components/HeaderPanel'
import { BackgroundView, Text } from '../../components'
import { COLORS } from '../../themes'
import { details } from './components/Details'
import DetailItem from './components/DetailItem'
import ProfileAvatar from './components/ProfileAvatar'
import ModalItem from './components/ModalItem'
import { stackName } from '../../configs/navigationConstants'
import { Profile, Profile2, Profile3 } from '../../assets/images'

export default function ProfileScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('Huan Phan');
    const [email, setEmail] = useState('huan@gmail.com');
    const profileList = [Profile, Profile2, Profile3];
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-300, -150, 0]
    })

    useEffect(() => {
        Animated.spring(opacity, {
            toValue: 1,
            duration: 500,
            friction: 3,
            tension: 50,
            useNativeDriver: true
        }).start();
    })

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
            <ProfileAvatar
                name={name}
                email={email}
                modalVisibleHandler={modalVisibleHandler}
                opacity={opacity}
                translateY={translateY}
            />
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
                    profileList={profileList}
                />
            </Modal>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({})