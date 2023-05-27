import { createSlice } from "@reduxjs/toolkit"
import { CART_TYPE_ACTIONS } from "./cart.type"



export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],

}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case CART_TYPE_ACTIONS.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_TYPE_ACTIONS.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state
    }
}
// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: CART_INITIAL_STATE,
//     reducers: {
//         addItemToCart: (state, action) => {
//             state.cartItems = addCartItem(state.cartItems, action.payload)
//         },
//         removeItemFromCart: (state, action) => {
//             state.cartItems = removeLastCartItem(state.cartItems, action.payload)
//         },
//         decreaseItems: (state, action) => {
//             state.cartItems = decreaseItem(state.cartItems, action.payload)
//         },
//         setIsCartOpen: (state, action) => {
//             state.isCartOpen = action.payload
//         }
//     }
// // })
// export const { setIsCartOpen, addItemToCart, decreaseItems, removeItemFromCart } = cartSlice.actions
// export const cartReducer = cartSlice.reducer




