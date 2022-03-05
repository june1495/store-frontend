import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        {cat === 'polos' && (
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
        )}
        {cat === 'zapatillas' && (
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>42</Option>
              <Option>40</Option>
              <Option>38</Option>
            </Select>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
            </Select>
          </Filter>
        )}
        {cat === 'jeans' && (
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>32</Option>
              <Option>30</Option>
              <Option>28</Option>
            </Select>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>blue</Option>
              <Option>black</Option>
            </Select>
          </Filter>
        )}
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price(desc) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  );
};

export default ProductList;

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;
