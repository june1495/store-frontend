/* eslint-disable no-underscore-dangle */
import { FavoriteBorderOutlined, SearchOutlined } from '@mui/icons-material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({ item }) => (
  <Container>
    <Circle />
    <Image src={item.img} />
    <Info>
      <Icon>
        <ShoppingCartOutlined />
      </Icon>
      <Link to={`/product/${item._id}`}>
        <Icon>
          <SearchOutlined style={{ color: '#444' }} />
        </Icon>
      </Link>
      <Icon>
        <FavoriteBorderOutlined />
      </Icon>
    </Info>
  </Container>
);

export default Product;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fbf8f1;
  box-shadow: -5px 9px 5px 0px rgba(0, 0, 0, 0.09);
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  object-fit: contain;
  z-index: 2;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  :hover {
    background-color: #54bab9;
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
