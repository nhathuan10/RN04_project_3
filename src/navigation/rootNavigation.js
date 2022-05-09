import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTab from './Tab/HomeTab';
import { stackName } from '../configs/navigationConstants';
import Screen from '../screens';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={stackName.signUpStack}
                component={Screen.SignUpScreen}
            />
            <Stack.Screen
                name={stackName.loginStack}
                component={Screen.LoginScreen}
            />
            <Stack.Screen
                name={stackName.introStack}
                component={Screen.IntroScreen}
            />
            <Stack.Screen
                name={stackName.homeStack}
                component={HomeTab}
            />
            <Stack.Screen
                name={stackName.detailStack}
                component={Screen.DetailScreen}
            />
            <Stack.Screen
                name={stackName.cartStack}
                component={Screen.CartScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})