import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'

export default function SlideItem({ item }) {
    return (
        <View style={styles.container}>
            <Image
                source={item.src}
                style={{
                    height: 340,
                    width: 380,
                    borderRadius: 60,
                }}
            />
            <Text style={styles.text} >{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.boldGray,
    },
    text: {
        color: COLORS.lightGray,
        fontFamily: 'Nunito-BoldItalic',
        fontSize: 35,
        margin: 15,
    }
})