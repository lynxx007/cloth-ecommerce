import React, { useContext, useState } from 'react'
import { createAuthUserWithEmailAndPass, createUserDocFromAuth } from '../../util/firebase/firebase.utils'
import { FormInput } from '../form-input/form-input.component'
import "../sign-up.component/sign-up.styles.scss"
import { Button } from '../button/button.component'
import { UserContext } from '../contexts/user-context'


const defaultFromFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ""
}

export const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFromFields)
    const { displayName, email, password, confirmPassword } = formFields
    const { setCurrentUser } = useContext(UserContext)

    const resetForm = () => {
        setFormFields(defaultFromFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Password does not match")
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPass(email, password)
            // setCurrentUser(user)
            // console.log(user);
            resetForm()
            await createUserDocFromAuth(user, { displayName })
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("email has been used")
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className='sign-up-container'>
            <h2>Dont have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUp