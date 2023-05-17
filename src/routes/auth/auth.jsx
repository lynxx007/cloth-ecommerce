import React, { useEffect } from 'react'
import { auth, signInGooglePopup, createUserFromAuth, signInGoogleRedirect } from '../../util/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'
import SignUp from '../../components/sign-up.component/sign-up.component'
import SignIn from '../../components/sign-in.component/sign-in.component'
import '../auth/auth.styles.scss'
export const Auth = () => {


    return (
        <div className='auth-container'>
            <SignIn />
            <SignUp />
        </div>

    )
}
export default Auth
