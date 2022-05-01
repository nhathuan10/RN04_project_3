import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from '../../../components'

export default function StoreItem({ item, viewOnMap }) {
    return (
        <View>
            <Image
                source={item.img}
                style={{ width: 350, height: 300, borderRadius: 15 }}
            />
            <Text subText italic style={{ marginBottom: 10 }}>{item.address}</Text>
            <Button text='View On Map' normal viewOnMap={viewOnMap} />
        </View>
    )
}

const styles = StyleSheet.create({})