import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { stackName } from '../../configs/navigationConstants'
import { BackgroundView } from '../../components'
import { COLORS } from '../../themes'
import HeaderPanel from './components/HeaderPanel'
import Header from './components/Header'
import { Text } from '../../components'
import axios from 'axios'
import CategoryItem from './components/CategoryItem'
import { useDispatch, useSelector } from 'react-redux'
import { requestListCategory } from '../../redux/thunk/actionThunk'

export default function HomeScreen({ navigation }) {
    const [categoryFocus, setCategoryFocus] = useState('');
    const listCategory = useSelector(state => state.listCategoryReducer.listCategory);
    const dispatch = useDispatch();
    const onPressCategoryFocus = (item) => {
        setCategoryFocus(item.category)
    }
    const renderItem = ({ item }) => {
        return (
            <CategoryItem 
                item={item} 
                categoryFocus={categoryFocus} 
                onPressCategoryFocus={() => onPressCategoryFocus(item)} 
            />
        )
    }
    
    useEffect(() => {
        dispatch(requestListCategory());
    }, [])

    return (
        <BackgroundView style={styles.container}>
            <HeaderPanel />
            <Header />
            <FlatList
                data={listCategory}
                renderItem={renderItem}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 27 }}></View>}
                style={{flexGrow: 0}}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={{color: 'red'}}>asdasd</Text>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    categoryFocus: {
        color: COLORS.lightGray,
    }
})