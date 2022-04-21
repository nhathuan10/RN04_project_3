import { FlatList, Image, StyleSheet, TouchableOpacity, View, Animated, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { stackName } from '../../configs/navigationConstants'
import { BackgroundView } from '../../components'
import { COLORS } from '../../themes'
import HeaderPanel from './components/HeaderPanel'
import Header from './components/Header'
import { Text } from '../../components'
import CategoryItem from './components/CategoryItem'
import { useDispatch, useSelector } from 'react-redux'
import { requestListCategory, requestListShoe, requestListShoeByCategory } from '../../redux/thunk/actionThunk'
import ShoeItem from './components/ShoeItem'

const { height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
    const [categoryFocus, setCategoryFocus] = useState('');
    const listCategory = useSelector(state => state.shoeReducer.listCategory);
    const listShoe = useSelector(state => state.shoeReducer.listShoe);
    const scrollY = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(300)).current;
    const opacityFlatList = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();

    const onPressCategoryFocus = (item) => {
        setCategoryFocus(item.category);
        dispatch(requestListShoeByCategory(item.id));
    }
    const renderlistCategory = ({ item }) => {
        return (
            <CategoryItem
                item={item}
                categoryFocus={categoryFocus}
                onPressCategoryFocus={() => onPressCategoryFocus(item)}
            />
        )
    }
    const renderListShoe = ({ item, index }) => {
        const inputRange = [
            -1,
            0,
            (height * 0.35) * index,
            (height * 0.35) * (index + 5),
        ];
        const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
        });
        const Offset = scrollY.interpolate({
            inputRange,
            outputRange: [0, 0, 0, 1500],
        });
        return (
            <ShoeItem item={item} Offset={Offset} opacity={opacity} index={index} />
        )
    }

    useEffect(() => {
        dispatch(requestListCategory());
    }, []);

    useEffect(() => {
        dispatch(requestListShoe());
    }, []);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacityFlatList, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 650,
                useNativeDriver: true,
            }),
        ]).start();
        console.log('animation');
    }, [listShoe]);

    return (
        <BackgroundView style={styles.container}>
            <HeaderPanel />
            <Header onPress={() => dispatch(requestListShoe())} />
            <FlatList
                data={listCategory}
                renderItem={renderlistCategory}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 27 }}></View>}
                style={{ flexGrow: 0 }}
                showsHorizontalScrollIndicator={false}
            />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                data={listShoe}
                renderItem={renderListShoe}
                ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
                style={{ marginTop: 50, opacity: opacityFlatList, transform: [{ translateY }] }}
                showsVerticalScrollIndicator={false}
            />
        </BackgroundView>
    )
}

const styles = StyleSheet.create({

})