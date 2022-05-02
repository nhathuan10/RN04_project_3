import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../components'
import { stackName } from '../../configs/navigationConstants'
import { WebView } from 'react-native-webview'
import BackIcon from 'react-native-vector-icons/Foundation'
import { COLORS } from '../../themes'

export default function FavoriteLinkScreen({ navigation, route }) {
    return (
        <View style={{height: '100%', width: '100%'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 0, zIndex: 1 }}>
                <BackIcon name='arrow-left' size={45} style={{ marginLeft: 20 }} color={COLORS.main} />
            </TouchableOpacity>
            <WebView
                source={{ uri: route.params.link }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})