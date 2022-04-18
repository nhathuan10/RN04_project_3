import { SET_USER_INFO } from "../actions/action"

const initialState = {
    userInfo: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_INFO:
            return { ...state, userInfo: payload }
        default:
            return { ...state }
    }
}
