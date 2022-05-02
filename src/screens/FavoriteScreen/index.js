import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackgroundView, Text } from '../../components'
import { stackName } from '../../configs/navigationConstants'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '../../themes'
import ShoeItem from './component/ShoeItem'
import { useState } from 'react'
import { requestDetailShoeSuccess } from '../../redux/actions/action'
import { requestDetailShoe } from '../../redux/thunk/actionThunk'

export default function FavoriteScreen({ navigation }) {
    const listShoe = useSelector(state => state.shoeReducer.listShoe);
    const shoe = useSelector(state => state.shoeReducer.shoe);
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
            link: 'https://www.converse.com/us'
        }
    ]
    //const [itemDetail, setItemDetail] = useState(listShoe[0]);

    const onPressShoeItem = (item) => {
        //setItemDetail(item);
        dispatch(requestDetailShoe(item.id));
    }

    const renderItem = ({ item }) => {
        return (
            <ShoeItem
                item={item}
                onPress={() => onPressShoeItem(item)}
            />
        )
    }

    const viewOnWeb = (category) => {
        shoeLinks.forEach((shoeLink) => {
            if(shoeLink.brand === category){
                navigation.navigate(stackName.favoriteLinkStack, {link: shoeLink.link})
            }
        })
    }

    return (
        <BackgroundView style={{ backgroundColor: COLORS.semiLightGray, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate(stackName.favoriteLinkStack)}>
                <Text>FavoriteScreen</Text>
            </TouchableOpacity>
            <FlatList
                data={listShoe}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
                style={{ flexGrow: 0 }}
                decelerationRate='fast'
                snapToInterval={350}
            />
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: shoe.image }}
                    style={{ height: 200, width: 250 }}
                />
                <Text bold>{shoe.name}</Text>
                <Text italic subText>$ {shoe.price}</Text>
                <TouchableOpacity onPress={() => viewOnWeb(shoe.categories[0].category)}>
                    <Text italic>Brand: {shoe.categories[0].category}</Text>
                </TouchableOpacity>
            </View>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({})