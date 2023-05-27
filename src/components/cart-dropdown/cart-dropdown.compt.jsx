import { Button } from '../button/button.component'


import React, { useContext } from 'react'
import { CartItem } from '../cart-item/cart-item'
import { CartContext } from '../contexts/cart-context'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CartDropdownContainer } from './cart-dropdown.style'
import { CartItems } from './cart-dropdown.style'
import { EmptyMessage } from './cart-dropdown.style'


export const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/chekout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map(item =>
                    <CartItem key={item.id} name={item.name} quantity={item.quantity} img={item.imageUrl} price={item.price} id={item.id} />))
                    : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
                }
            </CartItems>
            <Link to='checkout'><Button onClick={goToCheckoutHandler}>Check out</Button></Link>
        </CartDropdownContainer>
    )


}
