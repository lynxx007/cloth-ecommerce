import { createAction } from "../../util/reducer/reducer"
import { CATEGORIES_ACTION_TYPE } from "./category.type"

export const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)
}