import { createAction } from "../../util/reducer/reducer"
import { CATEGORIES_ACTION_TYPE } from "./category.type"
import { getCategoriesAndDocs } from '../../util/firebase/firebase.utils'




export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL, error)

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart())

//     try {
//         const categoriesArray = await getCategoriesAndDocs()
//         dispatch(fetchCategoriesSuccess(categoriesArray))
//     }
//     catch (error) {
//         dispatch(fetchCategoriesFail(error))
//     }
// }
