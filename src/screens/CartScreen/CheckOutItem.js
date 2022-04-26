import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'
import { Text } from '../../components'
import TrashIcon from 'react-native-vector-icons/FontAwesome5'

export default function CheckOutItem({item, deleteProduct}) {
    return (
        <View style={styles.container}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            <View style={{ marginHorizontal: 10, justifyContent: 'center', width: '65%' }}>
                <Text title bold>{item.name}</Text>
                <Text>$ {item.price}</Text>
                <Text>Size: {item.size}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteProduct(item)}>
                <TrashIcon name='trash' size={25} color={COLORS.main} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.lightGray,
        borderRadius: 15,
    },
    image: { 
        width: 120, 
        height: 120, 
        transform: [{ rotate: '-25deg' }] 
    },
    icon: { 
        position: 'absolute', 
        bottom: 10, 
        right: 20 
    }
})