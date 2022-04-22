import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from '../../../components'
import Header from './Header'
import { requestListShoe } from '../../../redux/thunk/actionThunk'
import { useDispatch } from 'react-redux'
import { requestSeachShoe } from '../../../redux/actions/action'

export default function HeaderContainer({ listShoe }) { 
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const onPressSearchShoe = () => {
        const searchShoes = listShoe.filter(shoe => shoe.name.includes(text));
        dispatch(requestSeachShoe(searchShoes));
    }
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={{ width: 310, margin: 0 }}
                styleInput={{ width: '100%' }}
                icon
                onChangeText={(text) => setText(text)}
                onPressSearchShoe={onPressSearchShoe}
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