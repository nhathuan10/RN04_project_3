import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackgroundView, Button, Text } from '../../components'
import { stackName } from '../../configs/navigationConstants'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '../../themes'
import ShoeItem from './component/ShoeItem'
import { requestDetailShoe } from '../../redux/thunk/actionThunk'
import PointIcon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

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
            link: 'https://www.wear.com.vn/'
        }
    ]

    const onPressShoeItem = (item) => {
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
            if (shoeLink.brand === category) {
                navigation.navigate(stackName.favoriteLinkStack, { link: shoeLink.link })
            }
        })
    }

    return (
        <BackgroundView style={{ backgroundColor: COLORS.semiLightGray, alignItems: 'center' }}>
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
                <Text bold title>{shoe.name}</Text>
                <Text italic bold subText>$ {shoe.price}</Text>
                <Text>Quantity: {shoe.quantity}</Text>
                <View style={{ alignItems: 'center', }}>
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
                </View>
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
    }
})