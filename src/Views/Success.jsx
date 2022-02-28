/* eslint-disable operator-linebreak */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { userRequest } from '../requestMethods';

const Success = () => {
  const location = useLocation();

  const data = location.state.stripeData;

  const cart = location.state.products;

  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        await userRequest.post('/orders', {
          userId: currentUser.id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: data.amount,
          address: data.billing_details.address,
        });
      } catch {}
    };
    createOrder();
  }, []);
  useEffect(() => {
    setOrderId(data.id);
  }, [data]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {orderId &&
        `Order has been created successfully. Your order number is ${orderId}`}
      <Link to="/">
        <Button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default Success;

const Button = styled.button`
  color: #fff;
  font-size: 14px;
  background: #54bab9;
  display: inline-block;
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  margin-top: -5px;
  margin-left: 25px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  font-family: Poppins;
  border-radius: 5px;
  :hover {
    color: #323332;
  }
`;
