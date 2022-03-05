/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable function-paren-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty */

import styled from 'styled-components';
import { FormGroup, Input } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginImage } from '../redux/userSlice';
import { userRequest } from '../requestMethods';
import Navbar from '../components/Navbar';
import config from '../config';

const { URL_BASE } = config;
const UserProfile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [order, setOrder] = useState();
  const { currentUser, img, isFetching } = useSelector((state) => state.user);

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
  useEffect(() => {
    const getOrder = async () => {
      const resp = await axios.get(`${URL_BASE}/orders/find/${id}`, {
        headers: {
          token: `Bearer ${currentUser?.token}`,
        },
      });
      setOrder(resp.data);
    };

    getOrder();
  }, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>
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
          {order?.map((e) =>
            e.products.map((c) => (
              <ContainerO key={c._id}>
                <Content>
                  <OrderImage src={c.img} />
                  <OrderInfo>
                    <OrderName>
                      <span>ProductId:</span> {c.productId}
                    </OrderName>
                    <OrderDes>
                      <span>Producto : </span>
                      {c.title}
                    </OrderDes>
                    <OrderQty>
                      <span>Cantidad:</span> {c.quantity}
                    </OrderQty>
                  </OrderInfo>
                </Content>
                <Hr />
              </ContainerO>
            )),
          )}
        </OrderProfile>
      </Wrapper>
    </Container>
  );
};
export default UserProfile;

const Container = styled.div``;
const Wrapper = styled.div`
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
  h1 {
    text-align: center;
    border-bottom: 1px solid #fff;
  }
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
  background-color: #fbf8f1;
  height: 50%;
  width: 100%;
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
  justify-content: space-evenly;
  align-items: flex-start;
  padding-bottom: 80px;
`;

const OrderName = styled.div`
  span {
    font-weight: 600;
  }
`;

const OrderDes = styled.div`
  span {
    font-weight: 600;
  }
`;

const OrderQty = styled.div`
  span {
    font-weight: 600;
  }
`;

const Hr = styled.hr`
  background-color: #fff;
  border: none;
  height: 2px;
`;
const ContainerO = styled.div``;
