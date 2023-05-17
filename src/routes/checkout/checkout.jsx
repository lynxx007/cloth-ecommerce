import { CartContext } from '../../components/contexts/cart-context'
import { useContext } from 'react'
import '../checkout/checkout.styles.scss'
import { ProductsContext } from '../../components/contexts/products-context'
import { Link } from 'react-router-dom'
import { CheckoutItem } from '../../components/checkout-item/checkout-item'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { removeLastItemFromCart } from '../../store/cart/cart.action'
import { addItemToCart } from '../../store/cart/cart.action'
import { itemDecrease } from '../../store/cart/cart.action'
// import { totalPriceCartItems } from '../../store/cart/cart.action'
export const Checkout = () => {
    // const { itemDecrease, totalPriceCartItems, cartItems, addItemToCart, removeLastItemFromCart, } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const removeItem = () => {
        dispatch(removeLastItemFromCart(cartItems))
    }
    return (
        <div className='checkout-container'>
            {cartItems.length > 0 ? (
                <><div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <CheckoutItem id={item.id} img={item.imageUrl} name={item.name}
                                    desc={item.description} increase={() => dispatch(addItemToCart(cartItems, item))} decrease={() => dispatch(itemDecrease(cartItems, item))}
                                    price={item.price} qt={item.quantity} remove={() => removeItem(cartItems)} />
                            </div>

                        ))}
                        <h1 className='total'>Total :  ${cartTotal} </h1>
                    </div></>
            ) : <div>
                <span>Cart is empty</span>
                <Link to="/shop"><h2>Go back to the shop</h2></Link>
            </div>
            }
        </div >
    )
}

export default Checkout
