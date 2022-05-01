import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Text } from '../../components'
import { stackName } from '../../configs/navigationConstants';
import { stores } from './component/Stores';
import StoreItem from './component/StoreItem';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../themes';

export default function SearchScreen({ navigation }) {
    const viewOnMap = (item) => {
        navigation.navigate(stackName.searchMapStack, {
            lat: item.latitude,
            long: item.longitude,
            address: item.address
        }
        )
    }

    const renderItem = ({ item }) => {
        return (
            <StoreItem item={item} viewOnMap={() => viewOnMap(item)} />
        )
    }

    return (
        <LinearGradient
            colors={[COLORS.lightGray, COLORS.semiLightGray]}
            style={styles.container}
            start={{ x: 0.2, y: 0.6 }}
            end={{ x: 0.6, y: 0.2 }}
        >
            <View style={styles.container}>
                <Text header bold>OUR STORES</Text>
                <FlatList
                    data={stores}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
                    style={{ marginVertical: 20 }}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})