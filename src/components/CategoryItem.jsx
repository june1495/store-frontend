import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryItem = ({ item }) => (
  <Container>
    <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Ver</Button>
      </Info>
    </Link>
  </Container>
);

export default CategoryItem;
const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
  box-shadow: -5px 9px 5px 0px rgba(0, 0, 0, 0.5);
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  color: #fff;
  font-size: 14px;
  background: #54bab9;
  display: inline-block;
  border: none;
  padding: 5px 10px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  font-family: Poppins;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #323332;
    letter-spacing: 4px;
    opacity: 0.8;
  }
`;
