import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import { Text } from '../../../components'

export default function ModalItem({ relatedProduct, backFromRelatedProduct }) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={{ uri: relatedProduct.image }}
                    style={{ height: 200, width: 250, marginTop: -20 }}
                />
                <Text title bold>{relatedProduct.name}</Text>
                <Text subText>$ {relatedProduct.price}</Text>
                <Text>$ {relatedProduct.shortDescription}</Text>
            </View>
            <TouchableOpacity onPress={backFromRelatedProduct} style={styles.button}>
                <Text header italic bold style={{ color: COLORS.semiBoldGray, opacity: 0.8 }}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '50%',
        width: '100%',
        backgroundColor: COLORS.lightGray,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },
})