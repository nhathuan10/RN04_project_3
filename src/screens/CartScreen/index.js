import { FlatList, StyleSheet, TouchableOpacity, View, Alert, Image } from 'react-native'
import React from 'react'
import { Button, Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { requestCartListShoe } from '../../redux/actions/action';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../themes';
import BackIcon from 'react-native-vector-icons/Ionicons'
import CartIcon from 'react-native-vector-icons/Entypo'
import TrashIcon from 'react-native-vector-icons/FontAwesome5'

export default function CartScreen({ navigation, route }) {
    const cartListShoe = useSelector(state => state.shoeReducer.cartListShoe);
    const size = route.params.size;
    const shoe = route.params.shoe;
    const dispatch = useDispatch();
    let duplicateItem = true;
    let total = cartListShoe.reduce((sum, item) => {
        return sum += item.price;
    }, 0)

    cartListShoe.forEach((item) => {
        if (item.id === shoe.id) {
            // Alert.alert('Sorry !!',
            //     `This product ${route.params.shoe.name} already existed in the cart`,
            //     [
            //         {
            //             text: 'Go back',
            //             onPress: () => navigation.goBack(),
            //         },
            //         {
            //             text: 'OK'
            //         }
            //     ]
            // );
            duplicateItem = false;
        }
    })

    if (duplicateItem) {
        cartListShoe.push({ ...shoe, size });
    }

    useEffect(() => {
        dispatch(requestCartListShoe(cartListShoe));
    }, [])

    const deleteProduct = (item) => {
        const newCartListShoe = cartListShoe.filter(shoe => shoe.id !== item.id);
        dispatch(requestCartListShoe(newCartListShoe));
        console.log(newCartListShoe);
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: COLORS.lightGray,
                borderRadius: 15,
            }}
            >
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 120, height: 120, transform: [{ rotate: '-25deg' }] }}
                />
                <View style={{ marginHorizontal: 10, justifyContent: 'center', width: '65%' }}>
                    <Text title bold>{item.name}</Text>
                    <Text>$ {item.price}</Text>
                    <Text>Size: {item.size}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteProduct(item)}>
                    <TrashIcon name='trash' size={25} color={COLORS.main} style={{ position: 'absolute', bottom: 10, right: 20 }} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <LinearGradient
            colors={[COLORS.semiLightGray, COLORS.semiBoldGray]}
            style={styles.container}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 1, y: 0.5 }}
        >
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <CartIcon name='shopping-cart' size={55} color={COLORS.lightGray} />
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon name='arrow-back' size={35} color={COLORS.lightGray} />
                    </TouchableOpacity>
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
            </View>
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