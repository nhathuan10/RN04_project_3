import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '../../screens';
import { tabName } from '../../configs/navigationConstants';

const BottomTab = createBottomTabNavigator();

export default function HomeTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name={tabName.homeTab} component={Screen.HomeScreen} />
            <BottomTab.Screen name={tabName.favoriteTab} component={Screen.FavoriteScreen} />
            <BottomTab.Screen name={tabName.searchTab} component={Screen.SearchScreen} />
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({})