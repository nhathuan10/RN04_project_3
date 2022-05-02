import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../components'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { COLORS } from '../../themes'
import BackIcon from 'react-native-vector-icons/Foundation'

export default function MapScreen({ navigation, route }) {
    const location =
    {
        latitude: route.params.lat,
        longitude: route.params.long,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
        address: route.params.address
    }
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 0, zIndex: 1 }}>
                <BackIcon name='arrow-left' size={45} style={{ marginLeft: 20 }} color={COLORS.main} />
            </TouchableOpacity>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={location}
            >
                <Marker coordinate={location}>
                    <View style={styles.infoContainer}>
                        <Text bold style={{ color: COLORS.lightGray }}>Xú's Store</Text>
                        <Text italic style={{ color: COLORS.lightGray }}>{location.address}</Text>
                    </View>
                    <View style={styles.smallIcon} />
                </Marker>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        padding: 8,
        backgroundColor: COLORS.regularGray,
        borderRadius: 8,
        alignItems: 'center'
    },
    smallIcon: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 14,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: COLORS.regularGray,
        transform: [{ rotate: '180deg' }],
        alignSelf: 'center'
    }
})