/* eslint-disable import/prefer-default-export */
// import axios from 'axios';
// import { useSelector } from 'react-redux';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userSlice';
import { publicRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// export const updateUser = async (dispatch, user) => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { id } = currentUser;
//   dispatch(loginStart());
//   try {
//     const res = await axios.put(`${URL_BASE}/users/find/${id}`, user, {
//       headers: {
//         token: `Bearer ${currentUser?.token}`,
//       },
//       data: user,
//     });
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };
