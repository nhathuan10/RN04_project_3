import { StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../../screens';
import { tabName } from '../../configs/navigationConstants';
import { COLORS } from '../../themes';
import TabIcon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SearchStack from '../Stack/SearchStack';
import FavoriteStack from '../Stack/FavoriteStack';
import ProfileIconTab from 'react-native-vector-icons/Entypo';

const BottomTab = createMaterialBottomTabNavigator();

export default function HomeTab() {
    const tabBarIcon = ({ focused }, iconName) => {
        if (iconName === 'user') {
            return <ProfileIconTab name={iconName} color={focused ? COLORS.lightGray : COLORS.semiBoldGray} size={focused ? 26 : 24} />
        } else {
            return <TabIcon name={iconName} color={focused ? COLORS.lightGray : COLORS.semiBoldGray} size={focused ? 26 : 24} />
        }
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
                component={FavoriteStack}
                options={{
                    tabBarIcon: (params) => tabBarIcon({ ...params }, 'favorite'),
                }}
            />
            <BottomTab.Screen
                name={tabName.searchTab}
                component={SearchStack}
                options={{
                    tabBarIcon: (params) => tabBarIcon({ ...params }, 'location-on'),
                }}
            />
            <BottomTab.Screen
                name={tabName.profileTab}
                component={Screen.ProfileScreen}
                options={{
                    tabBarIcon: (params) => tabBarIcon({ ...params }, 'user'),
                }}
            />
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({})