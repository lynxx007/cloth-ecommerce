import { takeLatest, put, all, call } from 'redux-saga/effects'

import { signInSuccess, signInFail, signUpFail, signOutSuccess, signOutFail } from './user.reducer'

import { USER_ACTION_TYPE } from './user.type'
import { createAuthUserWithEmailAndPass, createUserDocFromAuth, getCurrentUser, signInGooglePopup, signInUserWithEmailAndPass, signOutUser } from '../../util/firebase/firebase.utils'
import { signUpSuccess } from './user.reducer'


export function* getDocFromUserAuth(userAuth, additionalInfo) {
    try {
        const userDoc = yield call(createUserDocFromAuth, userAuth, additionalInfo)
        yield put(signInSuccess(userDoc))
    } catch (error) {
        yield put(signInFail(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = call(getCurrentUser)
        if (!userAuth) return
        yield call(getDocFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFail(error))
    }
}

export function* signOutCurrentUser() {
    try {
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFail(error))
    }


}



export function* signInWithGoogle() {
    try {
        const respond = yield call(signInGooglePopup)

        yield call(getDocFromUserAuth, respond.user)
    } catch (error) {
        yield put(signInFail(error))
    }
}
export function* signInWithEmail(action) {
    try {
        const { email, password } = action.payload
        const respond = yield call(signInUserWithEmailAndPass, email, password)
        console.log(respond);
        yield call(getDocFromUserAuth, respond.user)
    } catch (error) {
        yield put(signInFail(error))
    }

}

export function* signUp(action) {
    try {
        const { email, password, displayName } = action.payload
        const { user } = yield call(createAuthUserWithEmailAndPass, email, password)
        yield put(signUpSuccess(user, { displayName }))
    } catch (error) {
        yield put(signUpFail(error))
    }
}
export function* signInAfterSignUp(action) {
    const { user, additionalInfo } = action.payload
    yield call(getDocFromUserAuth, user, additionalInfo)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated)
}
export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp)
}
export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp)
}



export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_OUT__START, signOutCurrentUser)
}



export function* userSaga() {
    yield all(
        [call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignOutStart),
        call(onSignUpSuccess)])
}