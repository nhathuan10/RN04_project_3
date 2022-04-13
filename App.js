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
<<<<<<< HEAD
      <Text>huan</Text>
=======
      <Text>Huan</Text>
>>>>>>> 94ef66856dcf6fb8b45da3e8bf95ca74f51fa304
    </View>
  )
}

const styles = StyleSheet.create({})