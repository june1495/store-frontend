/* eslint-disable object-curly-newline */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './Views/HomePage';
import './App.css';
import Navbar from './components/Navbar';

import Cart from './Views/Cart';
import Product from './Views/Product';
import ProductList from './Views/ProductList';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import AllProducts from './Views/AllProducts';
import Success from './Views/Success';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/allproducts">
          <AllProducts />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <RegisterPage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
