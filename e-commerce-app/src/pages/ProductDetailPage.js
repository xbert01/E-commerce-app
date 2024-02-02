
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = styled.div`
  text-align: center;
`;

const ProductDetailPage = () => {
  const { productId } = useParams();

  const product = {
    id: productId,
    name: 'Product ' + productId,
    price: '$19.99',
    image: 'url-to-image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <ProductDetailContainer>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.description}</p>
    </ProductDetailContainer>
  );
}

export default ProductDetailPage;
