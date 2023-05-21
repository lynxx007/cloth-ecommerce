import { takeLatest, all, call, put } from 'redux-saga/effects'
import { fetchCategoriesSuccess, fetchCategoriesFail } from './category.action'
import { getCategoriesAndDocs } from '../../util/firebase/firebase.utils'
import { CATEGORIES_ACTION_TYPE } from './category.type'




export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocs, 'categories')
        yield put(fetchCategoriesSuccess(categoriesArray))
    }
    catch (error) {
        yield put(fetchCategoriesFail(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}
