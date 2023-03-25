import { FlatList, StyleSheet, TouchableOpacity, View, Animated } from 'react-native'
import React from 'react'
import { BackgroundView, Button, Text } from '../../components'
import { stackName } from '../../configs/navigationConstants'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '../../themes'
import ShoeItem from './component/ShoeItem'
import { requestDetailShoe, requestListCategory, requestListShoeByCategory } from '../../redux/thunk/actionThunk'
import PointIcon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import { useEffect } from 'react'
import CategoryItem from '../HomeScreen/components/CategoryItem'
import { useState } from 'react'
import { useRef } from 'react'

export default function FavoriteScreen({ navigation }) {
    const listShoe = useSelector(state => state.shoeReducer.listShoe);
    const shoe = useSelector(state => state.shoeReducer.shoe);
    const listCategory = useSelector(state => state.shoeReducer.listCategory);
    const [categoryFocus, setCategoryFocus] = useState('');
    const opacity = useRef(new Animated.Value(0)).current;
    const rotate = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['-180deg', '-90deg', '0deg']
    })
    const translateX = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [200, 100, 0]
    })
    const translateY = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [200, 100, 0]
    })
    const dispatch = useDispatch();
    const shoeLinks = [
        {
            brand: 'NIKE',
            link: 'https://www.nike.com/vn/'
        },
        {
            brand: 'ADIDAS',
            link: 'https://www.adidas.com.vn/vi'
        },
        {
            brand: 'VANS CONVERSE',
            link: 'https://www.wear.com.vn/'
        }
    ]

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }).start();
    }, [])

    useEffect(() => {
        dispatch(requestListCategory);
    }, [])

    const onPressShoeItem = (item) => {
        dispatch(requestDetailShoe(item.id));
    }

    const onPressCategoryFocus = (item) => {
        setCategoryFocus(item.category);
        dispatch(requestListShoeByCategory(item.id))
    }

    const renderCategory = ({ item }) => {
        return (
            <CategoryItem
                item={item}
                categoryFocus={categoryFocus}
                onPressCategoryFocus={() => onPressCategoryFocus(item)}
                style={categoryFocus === item.category && styles.focused}
            />
        )
    }

    const renderShoe = ({ item }) => {
        return (
            <ShoeItem
                item={item}
                onPress={() => onPressShoeItem(item)}
            />
        )
    }

    const viewOnWeb = (category) => {
        shoeLinks.forEach((shoeLink) => {
            if (shoeLink.brand === category) {
                navigation.navigate(stackName.favoriteLinkStack, { link: shoeLink.link })
            }
        })
    }

    return (
        <BackgroundView style={{ backgroundColor: COLORS.semiLightGray, alignItems: 'center' }}>
            <FlatList
                data={listCategory}
                renderItem={renderCategory}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                decelerationRate='fast'
                snapToInterval={350}
            />
            <Animated.FlatList
                data={listShoe}
                renderItem={renderShoe}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
                style={{ flexGrow: 0, transform: [{ translateX }] }}
                decelerationRate='fast'
                snapToInterval={350}
            />
            <View style={{ alignItems: 'center' }}>
                <Animated.Image
                    source={{ uri: shoe.image }}
                    style={{ height: 200, width: 250, opacity, transform: [{ rotate }] }}
                />
                <Text bold title>{shoe.name}</Text>
                <Text italic bold subText>$ {shoe.price}</Text>
                <Text>Quantity: {shoe.quantity}</Text>
                <Animated.View style={{ alignItems: 'center', transform: [{ translateY }], opacity }}>
                    <Button
                        text='View Details'
                        title
                        onPressAddToCart={() => navigation.navigate(stackName.detailStack, { id: shoe.id })}
                        style={{ width: 200, marginVertical: 15 }}
                    />
                    <LinearGradient
                        colors={[COLORS.lightGray, COLORS.semiBoldGray]}
                        style={styles.brandContainer}
                    >
                        <View style={styles.brandSubContainer}>
                            <PointIcon name='hand-point-right' size={25} color={COLORS.main} />
                            <TouchableOpacity onPress={() => viewOnWeb(shoe.categories[0].category)} style={{ marginHorizontal: 5 }}>
                                <Text italic>View {shoe.categories[0].category} on web</Text>
                            </TouchableOpacity>
                            <PointIcon name='hand-point-left' size={25} color={COLORS.boldGray} />
                        </View>
                    </LinearGradient>
                </Animated.View>
            </View>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    brandContainer: {
        borderRadius: 8,
        marginVertical: 15,
        paddingHorizontal: 7
    },
    brandSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
        borderRadius: 8
    },
    focused: {
        color: COLORS.main,
        fontSize: 27,
    }
})