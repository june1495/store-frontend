// import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import React from 'react';
import SignInForm from './components/SignInForm';

const LoginPage = () => (
  <Container data-testid="login-page">
    <Content>
      <Image>
        <img
          src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="donate"
        />
      </Image>
      <FormContent>
        <div className="formBx">
          <h2>Iniciar Sesión</h2>
          <SignInForm />
        </div>
      </FormContent>
    </Content>
  </Container>
);

export default LoginPage;
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
      margin-bottom: 20px;
      span {
        font-size: 16px;
        margin-bottom: 5px;
        display: inline-block;
        color: #607d8b;
        font-weight: 300;
        letter-spacing: 1px;
        font-size: 16px;
      }
      input {
        width: 100%;
        padding: 10px 20px;
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
