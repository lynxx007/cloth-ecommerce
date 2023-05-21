import { CATEGORIES_ACTION_TYPE } from "./category.type"

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    error: null,
    isLoading: false
}
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            }
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}