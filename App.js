import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/rootStore'
import RootNavigation from './src/navigation/rootNavigation'

export default function App() {
  return(
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <RootNavigation />
    //   </NavigationContainer>
    // </Provider>
    <View>
      <Text>asd</Text>
    </View>
  )
}

const styles = StyleSheet.create({})