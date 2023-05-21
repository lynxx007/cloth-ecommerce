import React, { useContext } from 'react'
import '../product-card/product-card.styles.scss'
import { Button } from '../button/button.component'
import { CartContext } from '../contexts/cart-context'
import { addItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
export const ProductCard = (props) => {
    // Destructure the props passed in
    const { name, price, imageUrl, id } = props
    const dispatch = useDispatch()
    // const { addItemToCart, } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const addProductCard = () => dispatch(addItemToCart(cartItems, props))
    // Return a div with the image, name, and price
    return (
        <div className='product-card-container'>

            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType='invert' onClick={addProductCard}>Add to cart</Button>
        </div>
    )
}

