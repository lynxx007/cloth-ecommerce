import '../category-preview/category-preview.styles.scss'

import React from 'react'
import { ProductCard } from '../product-card/product-card.comp'
import { Link } from 'react-router-dom'

export const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>

            <h2>
                <Link to={title} className='title'>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {products.filter((_, idx) => idx < 4).map((product) => (
                    <ProductCard id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
                ))}
            </div>
        </div>
    )
}
