import { FlatList, StyleSheet, TouchableOpacity, View, Alert, Animated } from 'react-native'
import React, { useRef } from 'react'
import { Button, Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { requestCartListShoe } from '../../redux/actions/action';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../themes';
import BackIcon from 'react-native-vector-icons/Ionicons'
import CartIcon from 'react-native-vector-icons/Entypo'
import CheckOutItem from './CheckOutItem';

export default function CartScreen({ navigation, route }) {
    const cartListShoe = useSelector(state => state.shoeReducer.cartListShoe);
    const size = route.params.size;
    const shoe = route.params.shoe;
    const dispatch = useDispatch();
    let duplicateItem = false;
    const opacity = useRef(new Animated.Value(0)).current;

    cartListShoe.forEach((item) => {
        if (item.id === shoe.id) {
            duplicateItem = true;
        }
    })

    if (!duplicateItem) {
        cartListShoe.push({ ...shoe, size });
    }

    // useEffect(() => {
    //     if()
    // })

    useEffect(() => {
        dispatch(requestCartListShoe(cartListShoe));
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
        dispatch(requestCartListShoe(cartListShoe.filter(shoe => shoe.id !== item.id)));
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
            start={{ x: 0.5, y: 1 }}
            end={{ x: 1, y: 0.5 }}
        >
            <Animated.View style={{ opacity }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon name='arrow-back' size={35} color={COLORS.lightGray} />
                    </TouchableOpacity>
                    <CartIcon name='shopping-cart' size={55} color={COLORS.lightGray} />
                </View>
                <FlatList
                    data={cartListShoe}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }}></View>}
                    showsVerticalScrollIndicator={false}
                />
                <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between' }}>
                    <Text header bold>Total: $ {total}</Text>
                    <Button text='Check out' onPressCheckout={() => console.log('huan')} title />
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
    }
})