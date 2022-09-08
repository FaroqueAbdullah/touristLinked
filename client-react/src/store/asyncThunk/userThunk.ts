import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import UserService from '@/services/http/user';

export const createUser = createAsyncThunk(
  "/auth/register",
   async ( data: any ) => {
      const res = await UserService.createUser( data )
      return res.data
   }
)

export const logInUser = createAsyncThunk(
   "/auth/login",
    async ( data: any ) => {
       const res = await UserService.loginUser( data )
       return res.data
    }
 )

 export const forgetPassword = createAsyncThunk(
   "/auth/forgot-password",
    async ( data: any ) => {
       const res = await UserService.loginUser( data )
       return res.data
    }
 )

 export const verifyPasswordToken = createAsyncThunk(
   "/auth/verify-token",
    async ( data: any ) => {
       const res = await UserService.loginUser( data )
       return res.data
    }
 )

 export const resetPassword = createAsyncThunk(
   "/auth/reset-password",
    async ( data: any ) => {
       const res = await UserService.loginUser( data )
       return res.data
    }
 )

 export const activateUser = createAsyncThunk(
   "/auth/activate-account",
    async ( data: any ) => {
       const res = await UserService.loginUser( data )
       return res.data
    }
 )

 export const checkUserName = createAsyncThunk(
   "/auth/check-username",
    async ( data: any ) => {
       const res = await UserService.loginUser( data )
       return res.data
    }
 )