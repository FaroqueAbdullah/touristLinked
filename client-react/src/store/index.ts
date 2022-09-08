import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./reducers/userReducer";
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    auth: userReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

store.subscribe(()=>{
  console.log('hellooooo', store.getState().auth)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
