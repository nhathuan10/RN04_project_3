import { StyleSheet, View, Animated, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { stackName } from '../../configs/navigationConstants'
import { BackgroundView } from '../../components'
import HeaderPanel from './components/HeaderPanel'
import CategoryItem from './components/CategoryItem'
import { useDispatch, useSelector } from 'react-redux'
import { requestListCategory, requestListShoe, requestListShoeByCategory } from '../../redux/thunk/actionThunk'
import ShoeItem from './components/ShoeItem'
import HeaderContainer from './components/HeaderContainer'

const { height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
    const [categoryFocus, setCategoryFocus] = useState('');
    const listCategory = useSelector(state => state.shoeReducer.listCategory);
    const listShoe = useSelector(state => state.shoeReducer.listShoe);
    const scrollY = useRef(new Animated.Value(0)).current;
    const translateX = useRef(new Animated.Value(250)).current;
    const translateY = useRef(new Animated.Value(300)).current;
    const opacityFlatList = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();

    const goToDetail = (id) => {
        navigation.navigate(stackName.detailStack, { id });
    }
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
            <ShoeItem
                item={item}
                Offset={Offset}
                opacity={opacity}
                index={index}
                onPress={() => goToDetail(item.id)}
            />
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
                duration: 750,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 750,
                useNativeDriver: true,
            }),
            Animated.timing(translateX, {
                toValue: 0,
                duration: 750,
                useNativeDriver: true,
            }),
        ]).start();
    }, [])

    return (
        <BackgroundView style={styles.container}>
            <HeaderPanel smallItem />
            <HeaderContainer listShoe={listShoe} />
            <Animated.FlatList
                data={listCategory}
                renderItem={renderlistCategory}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 27 }}></View>}
                style={{ flexGrow: 0, transform: [{ translateX }], opacity: opacityFlatList }}
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
                style={{ marginTop: 20, flexShrink: 3, opacity: opacityFlatList, transform: [{ translateY }] }}
                showsVerticalScrollIndicator={false}
            />
        </BackgroundView>
    )
}

const styles = StyleSheet.create({})

