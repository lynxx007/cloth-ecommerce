import './category-preview.styles.jsx'

import React from 'react'
import { ProductCard } from '../product-card/product-card.comp'
import { Link } from 'react-router-dom'
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles.jsx'

export const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>

            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products.filter((_, idx) => idx < 4).map((product) => (
                    <ProductCard key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} id={product.id} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    )
}
