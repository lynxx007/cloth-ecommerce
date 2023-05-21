import React, { useState, useContext } from 'react'
import { createAuthUserWithEmailAndPass, createUserDocFromAuth, signInGooglePopup, signInUserWithEmailAndPass } from '../../util/firebase/firebase.utils'
import { FormInput } from '../form-input/form-input.component'
import "../sign-in.component/sign-in.styles.scss"
import { Button } from '../button/button.component'
import { UserContext } from '../contexts/user-context'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onGoogleSignInStart } from '../../store/user/user.saga'
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action'

const defaultFromFields = {

    email: '',
    password: '',

}

export const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFromFields)
    const { email, password } = formFields
    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const dispatch = useDispatch()

    const logGoogleUser = async () => {
        await dispatch(googleSignInStart())
        // await signInGooglePopup()
        // setCurrentUser(user)
        // console.log(user);
        // await createUserDocFromAuth(user)
        navigate("/")

    }
    const resetForm = () => {
        setFormFields(defaultFromFields)
    }
    const redirectToHomePage = () => {
        navigate("/")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            // const response = await signInUserWithEmailAndPass(email, password)
            dispatch(emailSignInStart(email, password))
            // const { user } = response
            // setCurrentUser(user)
            redirectToHomePage()


        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password')
                    break;
                case 'auth/user-not-found':
                    alert('Not user linked with this email')
                    break;
                default:
                    console.log(error);
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className='sign-in-container'>
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <div className='buttons-container'>
                    <Button type="submit" >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>


            </form>
        </div>
    )
}
export default SignIn

