import axios from 'axios'
import {
    requestDetailShoeSuccess,
    requestListCategorySuccess,
    requestListShoeByCategorySuccess,
    requestListShoeSuccess
} from '../actions/action';

export const requestListCategory = () => {
    return async dispatch => {
        try {
            const res = await axios({
                method: 'GET',
                url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
            })
            const listCategory = res.data.content;
            dispatch(requestListCategorySuccess(listCategory));
        } catch (err) {
            console.log(err);
        }
    }
}

export const requestListShoe = () => {
    return async dispatch => {
        try {
            const res = await axios({
                method: 'GET',
                url: 'http://svcy3.myclass.vn/api/Product'
            })
            const listShoe = res.data.content;
            dispatch(requestListShoeSuccess(listShoe))
        } catch (err) {
            console.log(err);
        }
    }
}

export const requestListShoeByCategory = (categoryId) => {
    return async dispatch => {
        try {
            const res = await axios({
                method: 'GET',
                url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId}`
            })
            const listShoe = res.data.content;
            dispatch(requestListShoeByCategorySuccess(listShoe))
        } catch (err) {
            console.log(err);
        }
    }
}

export const requestDetailShoe = (id) => {
    return async dispatch => {
        try {
            const res = await axios({
                method: 'GET',
                url: `http://svcy3.myclass.vn/api/Product/getbyid?id=${id}`
            })
            const shoe = res.data.content;
            dispatch(requestDetailShoeSuccess(shoe))
        } catch (err) {
            console.log(err);
        }
    }
}

