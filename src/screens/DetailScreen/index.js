import { Image, StyleSheet, View } from 'react-native'
import React ,{ useEffect} from 'react'
import { Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { requestDetailShoe } from '../../redux/thunk/actionThunk';
import HeaderPanel from '../HomeScreen/components/HeaderPanel';

export default function DetailScreen({navigation, route}) {
    const dispatch = useDispatch();
    const shoe = useSelector(state => state.shoeReducer.shoe);
    useEffect(() => {
        dispatch(requestDetailShoe(route.params.id))
    })
    return (
        <View>
            <HeaderPanel />
        </View>
    )
}

const styles = StyleSheet.create({})