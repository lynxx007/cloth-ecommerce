import { Button } from '../button/button.component'
import '../cart-dropdown/cart-dropdown.styles.scss'

import React, { useContext } from 'react'
import { CartItem } from '../cart-item/cart-item'
import { CartContext } from '../contexts/cart-context'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

export const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} name={item.name} quantity={item.quantity} img={item.imageUrl} price={item.price} />)}
            </div>
            <Link to='checkout'><Button>Check out</Button></Link>
        </div>
    )


}
