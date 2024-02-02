// ProductsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Product from '../components/Product';

const ProductsPageContainer = styled.div`
  text-align: center;
`;

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductsPage = ({ showRecommendedProducts }) => {
  const [allProducts, setAllProducts] = useState([
    { id: 1, name: 'Product 1', price: '$24.99', image: 'url-to-image-1' },
    { id: 2, name: 'Product 2', price: '$34.99', image: 'url-to-image-2' },
    { id: 3, name: 'Product 3', price: '$29.99', image: 'url-to-image-3' },
    { id: 4, name: 'Product 4', price: '$19.99', image: 'url-to-image-4' },
    { id: 5, name: 'Product 5', price: '$39.99', image: 'url-to-image-5' },
    { id: 6, name: 'Product 6', price: '$49.99', image: 'url-to-image-6' },
  ]);

  const [recommendedProducts, setRecommendedProducts] = useState([
    { id: 1, name: 'Recommended Product 1', price: '$24.99', image: 'url-to-image-1' },
    { id: 2, name: 'Recommended Product 2', price: '$34.99', image: 'url-to-image-2' },
    { id: 3, name: 'Recommended Product 3', price: '$29.99', image: 'url-to-image-3' },
  ]);

  const productsToShow = showRecommendedProducts ? recommendedProducts : allProducts;

  return (
    <ProductsPageContainer>
      <h2>{showRecommendedProducts ? 'Recommended Products' : 'All Products'}</h2>
      <ProductsList>
        {productsToShow.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </ProductsPageContainer>
  );
}

export default ProductsPage;
