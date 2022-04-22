import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from '../../../components'
import Header from './Header'
import { requestListShoe } from '../../../redux/thunk/actionThunk'
import { useDispatch } from 'react-redux'

export default function HeaderContainer() {
    const dispatch = useDispatch();
    return (
        <View
            style={styles.container}
        >
            <TextInput 
                style={{ width: 310, margin: 0 }} 
                styleInput={{ width: '100%' }} 
                icon 
            />
            <Header onPress={() => dispatch(requestListShoe())} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    }
})