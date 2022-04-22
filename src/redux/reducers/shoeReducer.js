import {
    REQUEST_LIST_CATEGORY_SUCCESS,
    REQUEST_LIST_SHOE_BYCATEGORY_SUCCESS,
    REQUEST_LIST_SHOE_SUCCESS,
    REQUEST_SEARCH_SHOE
}
    from "../actions/action"

const initialState = {
    listCategory: [],
    listShoe: [],
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
            return {...state, listShoe: payload}
        default:
            return state;
    }
}
