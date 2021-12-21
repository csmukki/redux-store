/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/prop-types */

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducers';

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
  },
});

export default store;
