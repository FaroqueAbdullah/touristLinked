import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import UserService from '@/services/user';

export const createUser = createAsyncThunk(
  "user/createUser",
 async ( data: any, thunkAPI ) => {
    const res = await UserService.loginUser( data )
   //  console.log('thunk data ', res.data)
    return res.data
 }
)