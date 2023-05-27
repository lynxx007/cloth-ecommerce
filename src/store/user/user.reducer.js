import { USER_ACTION_TYPE } from "./user.type"
import { createSlice } from "@reduxjs/toolkit"


export const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
        },
        signOutSuccess: (state) => {
            state.currentUser = null
        },
        signInFail: (state, action) => {
            state.error = action.payload
        },
        signOutFail: (state, action) => {
            state.error = action.payload
        },
        signUpFail: (state, action) => {
            state.error = action.payload
        },
        signUpSuccess: (state, action) => {
            state.currentUser = action.payload
        }
    }
})
export const { signInSuccess, signOutSuccess, signInFail, signOutFail, signUpFail, signUpSuccess } = userSlice.actions
export const userReducer = userSlice.reducer

// export const userReducer = (state = INITIAL_STATE, action) => {
//     const { type, payload } = action
//     switch (type) {
//         case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         case USER_ACTION_TYPE.SIGN_IN_FAIL:
//         case USER_ACTION_TYPE.SIGN_OUT_FAIL:
//         case USER_ACTION_TYPE.SIGN_UP_FAIL:
//             return {
//                 ...state, error: payload
//             }
//         case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
//             return {
//                 ...state, currentUser: null
//             }
//         default:
//             return state
//     }

//     //     // if (type === USER_ACTION_TYPE.SET_CURRENT_USER) {
//     //     //     return {
//     //     //         ...state, currentUser: payload
//     //     //     }
//     //     // }
//     //     // return state
// }
