import React, { useContext } from 'react'
import './product-card.styles.jsx'
import { BUTTON_TYPE_CLASS, Button } from '../button/button.component'
import { CartContext } from '../contexts/cart-context'
import { addItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles.jsx'
export const ProductCard = (props) => {
    // Destructure the props passed in
    const { name, price, imageUrl, id } = props
    const dispatch = useDispatch()
    // const { addItemToCart, } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const addProductCard = () => dispatch(addItemToCart(cartItems, props))
    // Return a div with the image, name, and price
    return (
        <ProductCardContainer key={id} >

            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name className='name'>{name}</Name>
                <Price className='price'>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductCard}>Add to cart</Button>
        </ProductCardContainer>
    )
}

