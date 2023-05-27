import React, { useContext } from 'react'

import './cart-icon.styles.jsx'
import { CartContext } from '../contexts/cart-context'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { useDispatch, useSelector } from 'react-redux'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx'

export const CartIcon = () => {
    // const { cartCount } = useContext(CartContext)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleIcon = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <CartIconContainer onClick={toggleIcon}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>

        </CartIconContainer>
    )
}
