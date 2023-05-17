import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import '../cart-icon/cart-icon.styles.scss'
import { CartContext } from '../contexts/cart-context'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { useDispatch, useSelector } from 'react-redux'

export const CartIcon = () => {
    // const { cartCount } = useContext(CartContext)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleIcon = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <div className='cart-icon-container' onClick={toggleIcon}>
            <ShoppingIcon className='shopping-count' />
            <span className='item-count'>{cartCount}</span>

        </div>
    )
}
