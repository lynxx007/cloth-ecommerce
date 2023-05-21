import '../category/category.scss'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../components/contexts/products-context'
import { ProductCard } from '../../components/product-card/product-card.comp'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/categories/category.selector'
import { Suspense } from '../../components/suspense/suspense'

export const Category = () => {
    const { category } = useParams()
    // const { products } = useContext(ProductsContext)
    const products = useSelector(selectProducts)
    const [filteredProducts, setProduct] = useState(products[category])

    useEffect(() => {
        setProduct(products[category])
    }, [products])
    return (
        <>
            {filteredProducts && <h2 className='category-title'>{category.toUpperCase()}</h2>}
            <div className='category-container'>

                {filteredProducts ? filteredProducts.map((product) => <ProductCard key={product.id} name={product.name}
                    price={product.price} imageUrl={product.imageUrl} />) :
                    <Suspense />
                }
            </div>
        </>
    )
}

