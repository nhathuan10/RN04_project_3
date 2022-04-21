import { REQUEST_LIST_CATEGORY_SUCCESS } from "../actions/action"

const initialState = {
    listCategory: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case REQUEST_LIST_CATEGORY_SUCCESS:
            return { ...state, listCategory: payload }

        default:
            return state
    }
}
