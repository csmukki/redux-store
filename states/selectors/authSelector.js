/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/prop-types */

import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

export const selectCurrentUserEmail = createSelector([selectAuth], auth => auth.currentUser.email);

export const selectCurrentUserPassword = createSelector(
  [selectAuth],
  auth => auth.currentUser.password,
);
