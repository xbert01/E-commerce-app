import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  text-align: center;
  max-width: 200px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <Link to={`/products/${product.id}`}>
        <ProductImage src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
      <ProductButton>Dodaj do koszyka</ProductButton>
    </ProductContainer>
  );
}

export default Product;