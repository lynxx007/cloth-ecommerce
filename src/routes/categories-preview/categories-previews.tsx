import React, { Fragment, useContext } from 'react'
// import { ProductsContext } from '../../components/contexts/products-context'
import { ProductCard } from '../../components/product-card/product-card.comp'

import { CategoryPreview } from '../../components/category-preview/category-preview'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/categories/category.selector'
export const CategoriesPreviews = () => {
    // const { products } = useContext(ProductsContext)
    const products = useSelector(selectProducts)
    return (
        <>
            {Object.keys(products).map((title) => {
                const product = products[title] 	//get the products from the context object.
                return <CategoryPreview key={title} title={title} products={product} />
            }
            )}


        </>
    )
}
export default CategoriesPreviews