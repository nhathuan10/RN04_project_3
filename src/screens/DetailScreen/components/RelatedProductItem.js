import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function RelatedProductItem({item}) {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: item.image }}
                style={{ height: 170, width: 200 }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})