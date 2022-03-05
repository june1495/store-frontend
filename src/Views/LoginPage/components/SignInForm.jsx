/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/apiCalls';
import useSignin from '../hook/useSignin';

const SignInForm = () => {
  const { validationSchema } = useSignin();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        login(dispatch, values);

        resetForm({ values: '' });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="inputBx">
            <span>Correo Electrónico</span>
            <Field name="email" type="email" data-cy="login-email-input" />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
          </div>
          <div className="inputBx">
            <span>Contraseña</span>
            <Field
              name="password"
              type="password"
              data-cy="login-password-input"
            />
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
          </div>
          <Button type="submit" data-cy="login-submmit-button">
            Iniciar Sesión
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;

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
