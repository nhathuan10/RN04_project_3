import { Image, StyleSheet, View, TouchableOpacity, FlatList, Animated, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { BackgroundView, Button, Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { requestDetailShoe } from '../../redux/thunk/actionThunk'
import HeaderPanel from '../HomeScreen/components/HeaderPanel'
import { COLORS } from '../../themes'
import BackIcon from 'react-native-vector-icons/AntDesign'
import { template } from '@babel/core'
import { stackName } from '../../configs/navigationConstants'
import SizeItem from './components/SizeItem'
import RelatedProductItem from './components/RelatedProductItem'
import ModalItem from './components/ModalItem'


export default function DetailScreen({ navigation, route }) {
    const dispatch = useDispatch();
    const shoe = useSelector(state => state.shoeReducer.shoe);
    const [sizeFocus, setSizeFocus] = useState(shoe.size ? shoe.size[0] : undefined);
    const opacity = useRef(new Animated.Value(0)).current;
    const [modalVisible, setModalVisible] = useState(false);
    const [backgroundOpacity, setBackgroundOpacity] = useState(1);
    const [relatedProduct, setRelatedProduct] = useState({});
    const translateY = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0]
    })
    const translateX = translateY.interpolate({
        inputRange: [-200, 0],
        outputRange: [-200, 0]
    })
    const translateX2 = translateY.interpolate({
        inputRange: [-200, 0],
        outputRange: [200, 0]
    })
    const translateYFlatList = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [250, 0]
    })
    const rotate = translateY.interpolate({
        inputRange: [-200, 0],
        outputRange: ['360deg', '-25deg']
    })
    const onPressSizeFocus = (item) => {
        setSizeFocus(item)
    }

    const renderSize = ({ item }) => {
        return (
            <SizeItem item={item} sizeFocus={sizeFocus} onPressSizeFocus={onPressSizeFocus} />
        )
    }

    const renderRelatedProducts = ({ item }) => {
        return (
            <RelatedProductItem item={item} onPress={() => showRelatedProductDetail(item)} />
        )
    }

    const showRelatedProductDetail = (item) => {
        setModalVisible(!modalVisible);
        setRelatedProduct(item);
        setBackgroundOpacity(0.3);
    }

    const onPressAddToCart = (shoe) => {
        navigation.navigate(stackName.cartStack, { shoe });
    }

    useEffect(() => {
        dispatch(requestDetailShoe(route.params.id))
    })

    const backFromRelatedProduct = () => {
        setModalVisible(!modalVisible);
        setBackgroundOpacity(1);
    }

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start();
    })

    return (
        <BackgroundView style={{ opacity: backgroundOpacity }}>
            <HeaderPanel style={styles.headerPanel} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon name='back' size={35} color={COLORS.boldGray} />
            </TouchableOpacity>
            <Animated.Image
                source={{ uri: shoe.image }}
                style={{ ...styles.logo, opacity, transform: [{ translateY }, { rotate }] }}
            />
            <View style={styles.info}>
                <Text title bold>{shoe.name}</Text>
                <Text title subText>$ {shoe.price}</Text>
            </View>
            <Animated.View style={{ opacity, transform: [{ translateX: translateX2 }] }}>
                <Text italic subText>{shoe.description}</Text>
            </Animated.View>
            <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }], opacity, marginTop: -25 }}>
                <Text bold style={{ paddingVertical: 5, fontSize: 20 }}>SIZE</Text>
                <FlatList
                    data={shoe.size}
                    renderItem={renderSize}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Animated.View>
            <Text title italic style={{ marginTop: 10 }}>Similar Products</Text>
            <Animated.FlatList
                data={shoe.relatedProducts}
                renderItem={renderRelatedProducts}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 30 }}></View>}
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, transform: [{ translateY: translateYFlatList }], opacity }}
            />
            <Modal visible={modalVisible} transparent={true} animationType={'slide'}>
                <ModalItem relatedProduct={relatedProduct} backFromRelatedProduct={backFromRelatedProduct} />
            </Modal>
            <Button text='ADD TO CART' normal onPressAddToCart={() => onPressAddToCart(shoe)} />
        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    headerPanel: {
        backgroundColor: COLORS.semiLightGray,
        height: 200
    },
    logo: {
        height: 320,
        width: 320,
        alignSelf: 'center',
        marginTop: -30
    },
    info: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: -30,
    }
})

