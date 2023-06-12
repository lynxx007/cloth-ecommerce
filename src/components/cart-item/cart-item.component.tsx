import React,{ FC } from 'react';

import { CartItemContainer, ItemDetails,RemoveSpan } from './cart-item.styles';

import {  CartItem as TCartItem } from '../../store/cart/cart.types';

import { clearItemFromCart } from '../../store/cart/cart.action';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems,cartItem))
}

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
      <RemoveSpan onClick={clearItemHandler}> &#10005;</RemoveSpan>
    </CartItemContainer>
  );
};

export default CartItem;
