// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #333;
  padding: 10px;
  color: white;
  text-align: center;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>E-Commerce App</h1>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
