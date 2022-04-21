import axios from 'axios'
import { requestListCategorySuccess } from '../actions/action';

export const requestListCategory = () => {
    return async dispatch => {
        //call api
        try {
            const res = await axios({
                method: 'GET',
                url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
            })
            const listCategory = (res.data.content);
            dispatch(requestListCategorySuccess(listCategory));
        } catch (err) {
            console.log(err);
        }
    }
}