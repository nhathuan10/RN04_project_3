import React from 'react'
import { stackName } from '../../configs/navigationConstants'
import AppIntroSlider from 'react-native-app-intro-slider'
import { COLORS } from '../../themes'
import NextButton from 'react-native-vector-icons/FontAwesome5'
import DoneButton from './components/DoneButton'
import SlideItem from './components/SlideItem'
import { slides } from './components/Slides'

export default function IntroScreen({ navigation }) {
    
    const renderItem = ({ item }) => {
        return (
            <SlideItem item={item} />
        )
    }

    const renderNextButton = () => {
        return (
            <NextButton name='arrow-circle-right' size={30} color={COLORS.lightGray} />
        )
    }

    const renderDoneButton = () => {
        return (
            <DoneButton onDone={onDone} />
        )
    }

    const onDone = () => {
        navigation.navigate(stackName.signUpStack)
    }

    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
        />
    )
}

