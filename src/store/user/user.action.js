import { createAction } from "../../util/reducer/reducer"
import { USER_ACTION_TYPE } from "./user.type"


export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
}

export const checkUserSession = () => {
    return createAction(USER_ACTION_TYPE.CHECK_USER_SESSION)
}
export const googleSignInStart = () => {
    return createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START)
}

export const emailSignInStart = (email, password) => {
    return createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password })
}

export const signInSuccess = (user) => {
    return createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user)
}

export const signInFail = (error) => {
    return createAction(USER_ACTION_TYPE.SIGN_IN_FAIL, error)
}

export const signUpStart = (email, password, displayName) => {
    return createAction(USER_ACTION_TYPE.SIGN_UP_START, { email, password, displayName })
}
export const signUpSuccess = (user, additionalInfo) => {
    return createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalInfo })
}

export const signUpFail = (error) => {
    return createAction(USER_ACTION_TYPE.SIGN_UP_FAIL, error)
}
export const signOutStart = () => {
    return createAction(USER_ACTION_TYPE.SIGN_OUT__START)
}
export const signOutFail = (error) => {
    return createAction(USER_ACTION_TYPE.SIGN_OUT_FAIL, error)
}

export const signOutSuccess = () => {
    return createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS, null)
}