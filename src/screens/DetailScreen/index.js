import { Image, StyleSheet, View, TouchableOpacity, FlatList, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { BackgroundView, Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { requestDetailShoe } from '../../redux/thunk/actionThunk'
import HeaderPanel from '../HomeScreen/components/HeaderPanel'
import { COLORS } from '../../themes'
import BackIcon from 'react-native-vector-icons/AntDesign'
import { template } from '@babel/core'


export default function DetailScreen({ navigation, route }) {
    const dispatch = useDispatch();
    const shoe = useSelector(state => state.shoeReducer.shoe);
    const [sizeFocus, setSizeFocus] = useState(shoe.size ? shoe.size[0] : undefined);
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0]
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
            <TouchableOpacity
                style={{
                    marginHorizontal: 10,
                    backgroundColor: (sizeFocus === item) ? COLORS.main : null,
                    padding: 5,
                    borderRadius: 8,
                }}
                onPress={() => onPressSizeFocus(item)}
            >
                <Text
                    style={{
                        color: (sizeFocus === item) ? COLORS.lightGray : null,
                    }}
                >
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderRelatedProducts = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image
                    source={{ uri: item.image }}
                    style={{ height: 170, width: 200 }}
                />
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        dispatch(requestDetailShoe(route.params.id))
    })

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    })

    return (
        <BackgroundView>
            <HeaderPanel style={{ backgroundColor: COLORS.semiLightGray }} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon name='back' size={35} color={COLORS.boldGray} />
            </TouchableOpacity>
            {/* <Animated.View style={{transform: [{ translateY }]}}> */}
            <Animated.Image
                source={{ uri: shoe.image }}
                style={{
                    height: 320,
                    width: 320,
                    alignSelf: 'center',
                    opacity,
                    transform: [{ translateY }, { rotate }]
                    //backgroundColor: 'red'
                }}
            />
            {/* </Animated.View> */}
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                }}
            >
                <Text title bold>{shoe.name}</Text>
                <Text title subText>$ {shoe.price}</Text>
            </View>
            <Animated.Text subText style={{opacity}}>{shoe.shortDescription}</Animated.Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text bold style={{ paddingVertical: 5 }}>SIZE</Text>
                <FlatList
                    data={shoe.size}
                    renderItem={renderSize}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text title bold style={{ marginTop: 20 }}>Related Products</Text>
            <FlatList
                data={shoe.relatedProducts}
                renderItem={renderRelatedProducts}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 30 }}></View>}
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0 }}
            />

        </BackgroundView>
    )
}

const styles = StyleSheet.create({})

