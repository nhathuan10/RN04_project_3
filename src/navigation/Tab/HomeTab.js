import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '../../screens';
import { tabName } from '../../configs/navigationConstants';
import { COLORS } from '../../themes';
import TabIcon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTab = createMaterialBottomTabNavigator();

export default function HomeTab() {
    const tabBarIcon = ({ focused }, iconName) => {
        return <TabIcon name={iconName} color={focused ? COLORS.lightGray : COLORS.semiBoldGray} size={focused ? 27 : 24} />
    }
    return (
        <BottomTab.Navigator
            initialRouteName="HomeTab"
            barStyle={{ backgroundColor: COLORS.main }}
            activeColor={COLORS.semiLightGray}
            labeled={false}
            tabBarOptions={{ activeTintColor: 'red' }}
            >
            <BottomTab.Screen
                name={tabName.homeTab}
                component={Screen.HomeScreen}
                options={{
                    tabBarIcon: (params) => tabBarIcon({ ...params }, 'home'),
                }}
            />
            <BottomTab.Screen
                name={tabName.favoriteTab}
                component={Screen.FavoriteScreen}
                options={{
                    tabBarIcon: (params) => tabBarIcon({ ...params }, 'favorite'),
                }}
            />
            <BottomTab.Screen
                name={tabName.searchTab}
                component={Screen.SearchScreen}
                options={{
                    tabBarIcon: (params) => tabBarIcon({ ...params }, 'location-on'),
                }}
            />
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({})