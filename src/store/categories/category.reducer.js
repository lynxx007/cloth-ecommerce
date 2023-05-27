import { createSlice } from "@reduxjs/toolkit"
import { CATEGORIES_ACTION_TYPE } from "./category.type"

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    error: null,
    isLoading: false
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        fetchCategoriesStart: (state) => {
            state.isLoading = true
        },
        fetchCategoriesSuccess: (state, action) => {
            state.categories = action.payload
            state.isLoading = false
        },
        fetchCategoriesFail: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})
export const { fetchCategoriesFail, fetchCategoriesStart, fetchCategoriesSuccess } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
// export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
//     const { type, payload } = action
//     switch (type) {
//         case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
//             return {
//                 ...state,
//                 categories: payload,
//                 isLoading: false
//             }
//         case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL:
//             return {
//                 ...state,
//                 error: payload,
//                 isLoading: false
//             }
//         default:
//             return state
//     }
// }