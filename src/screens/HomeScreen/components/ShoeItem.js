import { StyleSheet, Animated, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import { Text } from '../../../components'

export default function ShoeItem({ item, index, Offset, opacity }) {
    return (
        <TouchableOpacity>
            <Animated.View
                style={{ ...styles.container, transform: [{ translateX: Offset }], opacity: opacity }}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <Text title bold>{item.name}</Text>
                <Text italic bold>$ {item.price}</Text>
                <HeartIcon
                    name={(index % 2 == 0) ? 'heart' : 'hearto'}
                    size={25}
                    style={styles.icon}
                />
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.semiLightGray,
        height: 275,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        elevation: 5,
    },
    image: {
        height: 160,
        width: 250,
        transform: [{ rotate: '-20deg' }]
    },
    icon: {
        position: 'absolute',
        top: 20,
        right: 20
    }
})