import React, { Fragment, useContext } from 'react'
import { ProductsContext } from '../../components/contexts/products-context'
import { ProductCard } from '../../components/product-card/product-card.comp'
import '../shop/shop.styles.scss'
import { Category } from '../category/category'
import { fetchCategoriesStart } from '../../store/categories/category.action'
import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview } from '../categories-preview/categories-preview'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
export const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}
export default Shop