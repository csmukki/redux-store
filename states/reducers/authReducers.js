/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/prop-types */

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  isUserSignedUp: false,
  authCredentials: null,
  error: undefined,
};

const authReducer = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    addCurrentUserEmail(state, action) {
      state.currentUser.email = action.payload;
    },
    addCurrentUserPassword(state, action) {
      state.currentUser.password = action.payload;
    },
    signUp: (state, action) => {
      state.currentUser = {
        email: action.payload.email,
        accontType: action.payload.accountType,
        mode: action.payload.mode,
      };
      state.isUserSignedUp = true;
      state.error = undefined;
    },
    signIn: (state, action) => {
      state.authCredentials = action.payload;
      state.error = undefined;
    },
    authError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const authActions = authReducer.actions;

export default authReducer;
