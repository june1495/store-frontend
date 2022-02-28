/* eslint-disable import/prefer-default-export */
import { loginFailure, loginStart, loginSuccess } from './userSlice';
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