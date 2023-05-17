import React, { Children, createContext, useEffect, useReducer, useState } from 'react'
import { createAction } from '../../util/reducer/reducer'


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

const addCartItem = (cartItems, productToAdd) => {

    const existingItem = cartItems.find(item => item.id === productToAdd.id)

    if (existingItem) {
        return cartItems.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    else if (!existingItem) {
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }
}

const removeLastCartItem = (cartItems) => {
    return cartItems.slice(0, -1)
}

const totalPriceCartItems = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
}

const decreaseItem = (cartItems, productToDecrease) => {
    const existingItem = cartItems.find(item => item.id === productToDecrease.id);

    if (!existingItem) {
        return cartItems;
    }

    const updatedCartItems = cartItems.map(item => {
        if (item.id !== productToDecrease.id) {
            return item;
        }

        const updatedQuantity = item.quantity - 1;

        if (updatedQuantity < 1) {
            return null;
        }

        return {
            ...item,
            quantity: updatedQuantity,
        };
    });

    return updatedCartItems.filter(Boolean);
};

const CART_ACTION_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [cartItems, setCartItem] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { cartItems, cartCount, isCartOpen } = state
    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    //     setCartCount(newCartCount)
    // }, [cartItems])

    const updatedCartItems = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0)
        dispatch(createAction(CART_ACTION_TYPE.SET_CART_ITEMS, { cartItems: newCartItems, cartCount: newCartCount }))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updatedCartItems(newCartItems)
    }
    const removeLastItemFromCart = () => {
        const newCartItems = removeLastCartItem(cartItems)
        updatedCartItems(newCartItems)
    }
    const itemDecrease = (productToDecrease) => {
        const newCartItems = decreaseItem(cartItems, productToDecrease)
        updatedCartItems(newCartItems)       //map the array to remove the item with the same id from the array and return it.
    }
    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool))
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeLastItemFromCart, totalPriceCartItems, itemDecrease }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>)
}
