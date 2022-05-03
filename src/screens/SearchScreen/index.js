import { StyleSheet, View, Animated } from 'react-native'
import React, { useRef } from 'react'
import { Text } from '../../components'
import { stackName } from '../../configs/navigationConstants';
import { stores } from './component/Stores';
import StoreItem from './component/StoreItem';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../themes';
import { useEffect } from 'react';

export default function SearchScreen({ navigation }) {
    const viewOnMap = (item) => {
        navigation.navigate(stackName.searchMapStack, {
            lat: item.latitude,
            long: item.longitude,
            address: item.address
        }
        )
    }
    const opacity = useRef(new Animated.Value(0)).current;
    const translateX1 = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [300, 150, 0]
    })
    const translateY1 = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-300, -150, 0]
    })
    const translateX2 = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-300, -150, 0]
    })
    const translateY2 = opacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [300, 150, 0]
    })

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    })

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
                <Animated.View style={{ transform: [{ translateX: translateX1 }, { translateY: translateY1 }], opacity }}>
                    <Text header bold>OUR LOCATIONS</Text>
                </Animated.View>
                <Animated.FlatList
                    data={stores}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
                    style={{ marginVertical: 20, transform: [{ translateX: translateX2 }, { translateY: translateY2 }] }}
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