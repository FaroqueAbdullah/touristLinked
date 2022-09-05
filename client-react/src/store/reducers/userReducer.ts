import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createUser } from '../asyncThunk/userThunk';


const initialState = {
  user: {},
  loading: false,
  jwtToken: '',
  error: ''
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log('action ', action.payload)
      state.loading = false;
      state.user = action.payload.data.user
      state.jwtToken = action.payload.jwtToken
    }),
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
    })
  },
  reducers: {}
})

export default userSlice.reducer;