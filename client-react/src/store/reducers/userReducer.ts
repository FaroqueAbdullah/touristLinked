import { createReducer, createSlice } from '@reduxjs/toolkit';

import { ActionType } from '../action-types';
import { LogInUser, LogOutUser, SignInUser, UserLogInCredentials, UserSignInCredentials, ActiveUserAccount } from '../actions/userActions';

type userAction = LogInUser | LogOutUser | SignInUser | ActiveUserAccount;

const initialState = {};

const userReducer = createReducer(initialState, {
  logInUser( state, action ) {
    state
  },
  logOutUser( state ) {
    state
  },
  signInUser( state, action ) {
    state
  },
  activateUser( state, action ) {
    state
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser( state, action ) {
      state
    },
    logOutUser( state ) {
      state
    },
    signInUser( state, action ) {
      state
    },
    activateUser( state, action ) {
      state
    },
  }
})

export default userSlice.reducer;