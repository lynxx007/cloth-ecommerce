import { useSelector } from 'react-redux';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  EmptyContainer,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <>
      {cartItems.length > 0 ? (
        <CheckoutContainer>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>Total: ${cartTotal}</Total>
          <PaymentForm />
        </CheckoutContainer>
      ) : (
        <EmptyContainer>
          <h2>CART IS EMPTY</h2>
          <span style={{textDecoration : 'underline'}}><Link to="/shop">GO BACK TO THE SHOP!</Link></span>
        </EmptyContainer>
      )}
    </>
  );
};

export default Checkout;
