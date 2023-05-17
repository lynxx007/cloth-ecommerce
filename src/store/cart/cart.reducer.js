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