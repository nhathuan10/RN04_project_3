import {
    REQUEST_CART_LIST_SHOE_AFTER_DELETE,
    REQUEST_CART_LIST_SHOE_SUCCESS,
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
    shoe: {},
    cartListShoe: []
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
            return { ...state, shoe: payload }
        case REQUEST_CART_LIST_SHOE_SUCCESS:
            return { ...state, cartListShoe: [...state.cartListShoe, payload] };
        case REQUEST_CART_LIST_SHOE_AFTER_DELETE:
            return { ...state, cartListShoe: payload }
        default:
            return state;
    }
}

