import React, { useEffect } from 'react'
import { auth, signInGooglePopup, createUserFromAuth, signInGoogleRedirect } from '../../util/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'
import SignUp from '../../components/sign-up.component/sign-up.component'
import SignIn from '../../components/sign-in.component/sign-in.component'
import { AuthContainer } from './auth.styles'

export const Auth = () => {


    return (
        <AuthContainer>
            <SignIn />
            <SignUp />
        </AuthContainer>

    )
}
export default Auth
