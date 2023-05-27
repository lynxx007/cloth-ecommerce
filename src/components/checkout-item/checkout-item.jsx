import React from 'react'
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './checkout-item.styles'
//importing classnames library 	//preferrably using css-in-js library
export const CheckoutItem = (props) => {
    const { id, img, name, desc, increase, decrease, price, qt, remove } = props
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decrease}>&#10094;</Arrow>
                <Value>{qt}</Value>
                <Arrow onClick={increase}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan className='price'>{price}</BaseSpan>
            <RemoveButton onClick={remove}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}
