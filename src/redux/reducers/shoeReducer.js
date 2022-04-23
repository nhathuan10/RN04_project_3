import {
    REQUEST_DETAIL_SHOE_SUCCESS,
    REQUEST_LIST_CATEGORY_SUCCESS,
    REQUEST_LIST_SHOE_BYCATEGORY_SUCCESS,
    REQUEST_LIST_SHOE_SUCCESS,
    REQUEST_SEARCH_SHOE
}
    from "../actions/action"

const initialState = {
    listCategory: [],
    listShoe: [],
    shoe: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_LIST_CATEGORY_SUCCESS:
            return { ...state, listCategory: payload }
        case REQUEST_LIST_SHOE_SUCCESS:
            return { ...state, listShoe: payload }
        case REQUEST_LIST_SHOE_BYCATEGORY_SUCCESS:
            return { ...state, listShoe: payload }
        case REQUEST_SEARCH_SHOE:
            return { ...state, listShoe: payload }
        case REQUEST_DETAIL_SHOE_SUCCESS:
            return {...state, shoe: payload}
        default:
            return state;
    }
}
