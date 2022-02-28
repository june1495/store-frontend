/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Product from './Product';
import config from '../config';

const { URL_BASE } = config;
console.log(URL_BASE);
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${URL_BASE}/products?category=${cat}`
            : `${URL_BASE}/products'`,
        );
        setProducts(res.data);
        // eslint-disable-next-line no-empty
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value),
          ),
        ),
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt),
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price),
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price),
      );
    }
  }, [sort]);

  // console.log(filteredProducts);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item, index) => (
            <Product item={item} key={index} />
          ))
        : products.map((item, index) => <Product item={item} key={index} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
