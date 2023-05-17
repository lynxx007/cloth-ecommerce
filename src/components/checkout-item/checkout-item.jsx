import React from 'react'
import '../checkout-item/checkout-item.styles.scss' 	//importing classnames library 	//preferrably using css-in-js library
export const CheckoutItem = (props) => {
    const { id, img, name, desc, increase, decrease, price, qt, remove } = props
    return (
        <div className='checkout-item-container'>

            <div className='image-container'>

                <img src={img} alt={name} />
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                <div onClick={decrease} className='arrow'>{`<`}</div>
                <span className='value'>{qt}</span>
                <div onClick={increase} className='arrow'>{`>`}</div>
            </span>

            <span className='price'>{price}</span>
            <div onClick={remove} className='remove-button'>
                &#10005;
            </div>
        </div>

    )
}
