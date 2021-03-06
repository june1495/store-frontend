// import { signUp } from '../../api/auth/authRequest';
import React from 'react';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SignupFormComponent from './components/SignupComponent';

const RegisterPage = () => (
  <Container data-testid="register-page">
    <Navbar />
    <Content>
      <Image>
        <img
          src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="donate"
        />
      </Image>
      <FormContent>
        <div className="formBx">
          <h2>Registrarse</h2>
          <SignupFormComponent />
        </div>
      </FormContent>
    </Content>
  </Container>
);
export default RegisterPage;

const Container = styled.div``;
const Content = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
`;
const Image = styled.div`
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(60deg, #54bab9, #d64338);
    z-index: 1;
    mix-blend-mode: screen;
  }
  position: relative;
  width: 50%;
  height: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FormContent = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .formBx {
    width: 50%;
    h2 {
      color: #607d8b;
      font-weight: 600;
      font-size: 1.5em;
      text-transform: uppercase;
      margin-bottom: 20px;
      border-bottom: 4px solid #54bab9;
      display: inline-block;
      letter-spacing: 1px;
    }
    .inputBx {
      margin-bottom: 10px;
      span {
        font-size: 16px;
        margin-bottom: 2px;
        display: inline-block;
        color: #607d8b;
        font-weight: 300;
        letter-spacing: 1px;
        font-size: 16px;
      }
      input {
        width: 100%;
        padding: 8px 20px;
        outline: none;
        font-weight: 400;
        border: 1px solid #607d8b;
        font-size: 16px;
        letter-spacing: 1px;
        color: #607d8b;
        background: transparent;
        border-radius: 30px;
      }
    }
  }
`;
