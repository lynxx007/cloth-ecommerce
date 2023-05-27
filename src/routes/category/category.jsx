import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/categories/category.selector';
import { ProductCard } from '../../components/product-card/product-card.comp';
import { Suspense } from '../../components/suspense/suspense';
import './category.style.jsx';
import { CategoryContainer, CategoryTitle } from './category.style.jsx';

const Category = () => {
    const { category } = useParams();
    const products = useSelector(selectProducts);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products[category] || []);
    }, [products, category]);

    return (
        <>
            {filteredProducts.length > 0 && (
                <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            )}

            {filteredProducts.length > 0 ? (
                <CategoryContainer>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            id={product.id} // Pass the id prop to ProductCard component
                        />
                    ))}</CategoryContainer>
            ) : (
                <Suspense />
            )}

        </>
    );
};

export default Category;

