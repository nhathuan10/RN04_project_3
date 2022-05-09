import React from 'react'
import DashboardIcon from 'react-native-vector-icons/FontAwesome'
import PaymentIcon from 'react-native-vector-icons/MaterialIcons'
import StaticsIcon from 'react-native-vector-icons/FontAwesome5'
import RewardIcon from 'react-native-vector-icons/Fontisto'
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../../themes'

export const details = [
    {
        title: 'Dashboard',
        img: <DashboardIcon name='dashboard' size={32} color={COLORS.main} />
    },
    {
        title: 'Payment History',
        img: <PaymentIcon name='payments' size={32} color={COLORS.main} />
    },
    {
        title: 'Statics',
        img: <StaticsIcon name='project-diagram' size={27} color={COLORS.main} />
    },
    {
        title: 'Reward',
        img: <RewardIcon name='credit-card' size={23} color={COLORS.main} />
    },
    {
        title: 'Log Out',
        img: <LogoutIcon name='logout' size={35} color={COLORS.main} />
    },
]