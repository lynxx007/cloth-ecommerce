import React, { Fragment, useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg'
import "../navigation/navigation.styles.scss"
import { UserContext } from '../../components/contexts/user-context'
import { signOutUser } from '../../util/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.compt'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.compt'
import { CartContext } from '../../components/contexts/cart-context'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
export const Navigation = () => {
    // const { currentUser, setCurrentUser } = useContext(UserContext)
    // const { isCartOpen } = useContext(CartContext)
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser)
    console.log(currentUser);
    const signOutHandler = async () => {
        await signOutUser()

    }


    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Crwnlogo className="logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link'>CONTACT</Link>

                    {currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
                        : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
