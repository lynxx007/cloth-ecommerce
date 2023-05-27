import React, { useContext } from 'react'
import './cart-item.styles.jsx'
import { CartContext } from '../contexts/cart-context'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CartItemContainer, ItemDetails, RemoveSpan } from './cart-item.styles.jsx'
export const CartItem = (props) => {
    const { name, quantity, price, key, img } = props
    // const { removeLastItemFromCart } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const removeItem = () => dispatch(removeItemFromCart(cartItems, props))	//removes item from cart on click of remove button.

    return (

        <CartItemContainer>
            <img src={img} alt={name} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>

            </ItemDetails>

            <RemoveSpan className='remove-button' onClick={removeItem}> &#10005;</RemoveSpan>
        </CartItemContainer>
    )
}