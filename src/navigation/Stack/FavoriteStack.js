import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { stackName } from '../../configs/navigationConstants';
import Screen from '../../screens';

const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={stackName.favoriteStack}
                component={Screen.FavoriteScreen}
            />
            <Stack.Screen
                name={stackName.favoriteLinkStack}
                component={Screen.FavoriteLinkScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})