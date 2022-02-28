/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable function-paren-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty */
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FormGroup, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginImage } from '../redux/userSlice';

// import { userRequest } from '../requestMethods';
const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUser, img, isFetching } = useSelector((state) => state.user);
  const { order } = useSelector((state) => state.cart);

  const uploadImage = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'dev_setups');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/donappppp/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();

    dispatch(loginImage(file.secure_url));
  };

  return (
    <Container>
      <ProfileUser>
        <ProfileImage>
          {isFetching ? (
            <Image src={img} />
          ) : (
            <FormGroup>
              <Input
                type="file"
                name="file"
                onChange={uploadImage}
                style={{ marginTop: '150px' }}
              />
            </FormGroup>
          )}
        </ProfileImage>
        <ProfileName>{currentUser.name}</ProfileName>
        <ProfileEmail>{currentUser.email}</ProfileEmail>
      </ProfileUser>
      <OrderProfile>
        <h1>Orders</h1>
        {order.map((product) => (
          <Content key={product._id}>
            <OrderImage src={product.img} />
            <OrderInfo>
              <OrderName>{product.title}</OrderName>
              <OrderDes>{product._id}</OrderDes>
              <OrderQty>{product.quantity}</OrderQty>
            </OrderInfo>
          </Content>
        ))}

        <Hr />
      </OrderProfile>
    </Container>
  );
};
export default UserProfile;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
`;

const ProfileUser = styled.div`
  flex: 1;
  background: #fbf8f1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderProfile = styled.div`
  flex: 3;
  height: 100%;
  width: 100%;
  background-color: #fbf8f1;
  border-left: 3px white solid;
`;

const ProfileImage = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: white;
  position: relative;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  padding: 30px 0px;
`;

const ProfileEmail = styled.span``;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OrderImage = styled.img`
  flex: 1;
  object-fit: contain;
  height: 200px;
  width: 250px;
  margin: 15px 0px;
`;

const OrderInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const OrderName = styled.span``;

const OrderDes = styled.span``;

const OrderQty = styled.span``;

const Hr = styled.hr`
  background-color: #fff;
  border: none;
  height: 2px;
`;
