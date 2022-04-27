import { FlatList, StyleSheet, TouchableOpacity, View, Alert, Animated } from 'react-native'
import React, { useRef } from 'react'
import { Button, Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../themes';
import BackIcon from 'react-native-vector-icons/Ionicons'
import CartIcon from 'react-native-vector-icons/Entypo'
import CheckOutItem from './CheckOutItem';
import { requestCartListShoe } from '../../redux/thunk/actionThunk';
import { requestCartListShoeAterDelete } from '../../redux/actions/action';

export default function CartScreen({ navigation, route }) {
    const cartListShoe = useSelector(state => state.shoeReducer.cartListShoe);
    const dispatch = useDispatch();
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        dispatch(requestCartListShoe({ id: route.params.id, size: route.params.size }));
    }, [])

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    })

    let total = cartListShoe.reduce((sum, item) => {
        return sum += item.price;
    }, 0)

    const deleteProduct = (item) => {
        dispatch(requestCartListShoeAterDelete(cartListShoe.filter(shoe => shoe.id !== item.id)));
    }

    const renderItem = ({ item }) => {
        return (
            <CheckOutItem item={item} deleteProduct={deleteProduct} />
        )
    }

    return (
        <LinearGradient
            colors={[COLORS.semiLightGray, COLORS.semiBoldGray]}
            style={styles.container}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.7, y: 0.5 }}
        >
            <Animated.View style={{ ...styles.subContainer, opacity }}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon name='arrow-back' size={35} color={COLORS.lightGray} />
                    </TouchableOpacity>
                    <CartIcon name='shopping-cart' size={75} color={COLORS.lightGray} />
                </View>
                <FlatList
                    data={cartListShoe}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }}></View>}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.bottom}>
                    <Text header bold>Total: $ {total}</Text>
                    <Button text='Check out' onPressCheckout={() => console.log('Check Out')} title />
                </View>
            </Animated.View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subContainer: {
        width: '100%',
        flex: 1
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 35
    },
    bottom: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between'
    }
})