import React, { Fragment, useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg'
import "./navigation.styles.jsx"
import { UserContext } from '../../components/contexts/user-context'
import { signOutUser } from '../../util/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.compt'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.compt'
import { CartContext } from '../../components/contexts/cart-context'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { signOutStart } from '../../store/user/user.action'
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx'
export const Navigation = () => {
    // const { currentUser, setCurrentUser } = useContext(UserContext)
    // const { isCartOpen } = useContext(CartContext)
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    // console.log(currentUser);
    const signOutHandler = async () => {
        // await signOutUser()
        dispatch(signOutStart())
    }


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crwnlogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    <NavLink to='contact'>CONTACT</NavLink>

                    {currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
                        : (<NavLink to='/auth'>SIGN IN</NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
