export const SET_USER_INFO = 'SET_USER_INFO';
export const REQUEST_LIST_CATEGORY_SUCCESS = 'REQUEST_LIST_GAME_SUCCESS';

export const setUserInfo = (payload) => {
    return {
        type: SET_USER_INFO,
        payload
    }
}

export const requestListCategorySuccess = (payload) => {
    return {
        type: REQUEST_LIST_CATEGORY_SUCCESS,
        payload,
    }
}