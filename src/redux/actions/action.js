export const SET_USER_INFO = 'SET_USER_INFO';
export const REQUEST_LIST_CATEGORY_SUCCESS = 'REQUEST_LIST_CATEGORY_SUCCESS';
export const REQUEST_LIST_SHOE_SUCCESS = 'REQUEST_LIST_SHOE_SUCCESS';
export const REQUEST_LIST_SHOE_BYCATEGORY_SUCCESS = 'REQUEST_LIST_SHOE_BYCATEGORY_SUCCESS';

export const setUserInfo = (payload) => {
    return {
        type: SET_USER_INFO,
        payload
    }
}

export const requestListCategorySuccess = (payload) => {
    return {
        type: REQUEST_LIST_CATEGORY_SUCCESS,
        payload
    }
}

export const requestListShoeSuccess = (payload) => {
    return {
        type: REQUEST_LIST_SHOE_SUCCESS,
        payload
    }
}

export const requestListShoeByCategorySuccess = (payload) => {
    return {
        type: REQUEST_LIST_SHOE_BYCATEGORY_SUCCESS,
        payload
    }
}
