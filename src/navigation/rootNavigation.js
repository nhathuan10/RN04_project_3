import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTab from './Tab/HomeTab';
import { stackName } from '../configs/navigationConstants';
import DetailScreen from '../screens/DetailScreen';
import IntroScreen from '../screens/IntroScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen
                name={stackName.introStack}
                component={IntroScreen} 
            /> */}
            {/* <Stack.Screen
                name={stackName.signUpStack}
                component={SignUpScreen} 
            />
            <Stack.Screen
                name={stackName.loginStack}
                component={LoginScreen} 
            /> */}
            <Stack.Screen
                name={stackName.homeStack}
                component={HomeTab} 
            />
            <Stack.Screen
                name={stackName.detailStack}
                component={DetailScreen} 
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})