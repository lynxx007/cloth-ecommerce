import React, { useContext } from 'react'
import '../cart-item/cart-item.styles.scss'
import { CartContext } from '../contexts/cart-context'
import { useDispatch, useSelector } from 'react-redux'
import { removeLastItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
export const CartItem = (props) => {
    const { name, quantity, price, key, img } = props
    // const { removeLastItemFromCart } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const removeItem = () => dispatch(removeLastItemFromCart(cartItems))	//removes item from cart on click of remove button.

    return (

        <div className='cart-item-container'>
            <img src={img} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>

            </div>

            <span className='remove-button' onClick={removeItem}> &#10005;

            </span>
        </div>
    )
}