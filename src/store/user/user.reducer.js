import { USER_ACTION_TYPE } from "./user.type"



export const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            }
        case USER_ACTION_TYPE.SIGN_IN_FAIL:
        case USER_ACTION_TYPE.SIGN_OUT_FAIL:
        case USER_ACTION_TYPE.SIGN_UP_FAIL:
            return {
                ...state, error: payload
            }
        case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
            return {
                ...state, currentUser: null
            }
        default:
            return state
    }

    // if (type === USER_ACTION_TYPE.SET_CURRENT_USER) {
    //     return {
    //         ...state, currentUser: payload
    //     }
    // }
    // return state
}
