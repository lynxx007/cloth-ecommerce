import { createContext, useEffect, useReducer, useState } from "react";
import { onAuthStateListener, createUserDocFromAuth } from "../../util/firebase/firebase.utils";
import { createAction } from "../../util/reducer/reducer";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action
    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}
const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null)
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const { currentUser } = state
    console.log(currentUser);
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user))
    }


    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateListener((user) => {
            if (user) {
                createUserDocFromAuth(user)
            }
            setCurrentUser(user)
            console.log(user);
        })
        return unsubscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

