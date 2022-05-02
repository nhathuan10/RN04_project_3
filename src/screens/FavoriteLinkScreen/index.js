import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../components'
import { stackName } from '../../configs/navigationConstants'

export default function FavoriteLinkScreen({ navigation, route }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>FavoriteLinkScreen</Text>
                <Text>{route.params.link}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})