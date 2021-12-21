/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/prop-types */

import axios from 'axios';
import config from '../../config.json';
import { authActions } from '../reducers/authReducers';

export const signUpStartAsync = userCredentials => {
  return async dispatch => {
    const { email, password, accountType, mode } = userCredentials;
    try {
      // Replace with axios call:
      const response = await fetch({
        url: config.signUp,
        method: 'POST',
        data: {
          email,
          password,
          accountType,
          mode,
        },
      });
      if (response.ok) {
        const payload = {
          email,
          accountType,
          mode,
        };
        dispatch(authActions.signUp(payload));
      }
    } catch (error) {
      dispatch(authActions.authError(error.message));
    }
  };
};
const url =
  'http://k8s-flexforc-profilem-651901b5ee-977216516.us-east-1.elb.amazonaws.com/profile/api/users/sign-in';
export const signInStartAsync = userCredentials => {
  return async dispatch => {
    console.log('User Credentials: ', userCredentials);

    const { email, password, accountType, mode } = userCredentials;
    const data = {
      email,
      password,
      accountType,
      mode,
      verificationCode: 'String',
    };
    try {
      await axios
        .post(url, {
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => console.log(response))
        .catch(error => {
          dispatch(authActions.authError(error.message));
        });
    } catch (error) {
      dispatch(authActions.authError(error.message));
    }
  };
};
