/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Formik, Field, Form } from 'formik';

// import { Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import useSignup from '../hooks/useSignup';
import { register } from '../../../redux/apiCalls';

const SignupFormComponent = () => {
  const { validationSchema } = useSignup();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        register(dispatch, values);
        resetForm({ values: '' });
        swal({
          title: '¡Registro Exitoso!',
          icon: 'success',
          value: true,
          visible: true,
          className: 'swal-register-modal',
          closeModal: true,
        });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="inputBx">
            <span>Nombre de Usuario</span>
            <Field name="name" type="text" data-cy="register-name-input" />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </div>
          <div className="inputBx">
            <span>Correo Electrónico</span>
            <Field name="email" type="email" data-cy="register-email-input" />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
          </div>
          <div className="inputBx">
            <span>Contraseña</span>
            <Field
              name="password"
              type="password"
              data-cy="register-password-input"
            />
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
          </div>
          <div className="inputBx">
            <span>Repita Contraseña</span>
            <Field
              name="confirmPassword"
              type="password"
              data-cy="register-repeat-password-input"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <span>{errors.confirmPassword}</span>
            ) : null}
          </div>
          <Button type="submit" data-cy="register-submmit-button">
            Registrarse
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormComponent;

const Button = styled.button`
  background: #54bab9;
  color: #fff;
  font-size: 14px;
  display: inline-block;
  border: none;
  padding: 10px 10px;
  margin-top: 10px;
  margin-left: 25%;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    letter-spacing: 4px;
  }
`;
