import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { 
  createUser, 
  logInUser,
  forgetPassword,
  verifyPasswordToken,
  resetPassword,
  activateUser,
  checkUserName
} from '../asyncThunk/userThunk';


const initialState = {
  userProfile: {},
  loading: false,
  jwtToken: '',
  status: ''
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {

    // create user login handlers
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userProfile = action.payload.data.user
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
    }),

    // login state handlers
    builder.addCase(logInUser.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userProfile = action.payload.data.user
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(logInUser.rejected, (state, action) => {
      state.loading = false;
    }),

    // forgetPassword state handlers
    builder.addCase(forgetPassword.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.loading = false;
    }),

    // verifyPasswordToken state handlers
    builder.addCase(verifyPasswordToken.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(verifyPasswordToken.fulfilled, (state, action) => {
      state.loading = false;
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(verifyPasswordToken.rejected, (state, action) => {
      state.loading = false;
    }),

    // resetPassword state handlers
    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
    }),

    // activateUser state handlers
    builder.addCase(activateUser.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(activateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(activateUser.rejected, (state, action) => {
      state.loading = false;
    }),

    // checkUserName state handlers
    builder.addCase(checkUserName.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(checkUserName.fulfilled, (state, action) => {
      state.loading = false;
    }),
    builder.addCase(checkUserName.rejected, (state, action) => {
      state.loading = false;
    })
  },
  reducers: {}
})

export default userSlice.reducer;