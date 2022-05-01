import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { stackName } from '../../configs/navigationConstants';
import Screen from '../../screens';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name={stackName.searchListStack}
                component={Screen.SearchScreen}
            />
            <Stack.Screen 
                name={stackName.searchMapStack}
                component={Screen.MapScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})