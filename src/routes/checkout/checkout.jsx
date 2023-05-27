import { CartContext } from '../../components/contexts/cart-context'
import { useContext } from 'react'
import { ProductsContext } from '../../components/contexts/products-context'
import { Link } from 'react-router-dom'
import { CheckoutItem } from '../../components/checkout-item/checkout-item'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { removeItemFromCart } from '../../store/cart/cart.action'
import { addItemToCart } from '../../store/cart/cart.action'
import { itemDecrease } from '../../store/cart/cart.action'
import { PaymentForm } from '../../components/payment-form/payment.form'
import { CheckoutContainer, CheckoutHeader } from './checkout.styles.jsx'
import { HeaderBlock } from './checkout.styles.jsx'
// import { totalPriceCartItems } from '../../store/cart/cart.action'
export const Checkout = () => {
    // const { itemDecrease, totalPriceCartItems, cartItems, addItemToCart, removeLastItemFromCart, } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const removeItem = (item) => {
        dispatch(removeItemFromCart(cartItems, item))
    }
    return (
        <CheckoutContainer>
            {cartItems.length > 0 ? (
                <>
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
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <CheckoutItem id={item.id} img={item.imageUrl} name={item.name}
                                    desc={item.description} increase={() => dispatch(addItemToCart(cartItems, item))} decrease={() => dispatch(itemDecrease(cartItems, item))}
                                    price={item.price} qt={item.quantity} remove={() => removeItem(item)} />
                            </div>

                        ))}
                        <h1 className='total'>Total :  ${cartTotal} </h1>
                        <PaymentForm />
                    </div>
                </>
            ) : <div>
                <span>Cart is empty</span>
                <Link to="/shop"><h2>Go back to the shop</h2></Link>
            </div>
            }
        </CheckoutContainer>
    )
}

export default Checkout
