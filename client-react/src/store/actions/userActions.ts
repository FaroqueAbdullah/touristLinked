import { ActionType } from "../action-types";

export interface UserLogInCredentials {
  email: string,
  password: string
}

export interface UserSignInCredentials {
  firstName: string,
  lastName: string,
  username: string,
  country: string,
  address: string,
  phoneNumber: string,
  email: string,
  password: string,
  confirmPassword: string
}

export interface LogInUser {
  type: ActionType.LOGINUSER,
  payload: UserLogInCredentials
}

export interface LogOutUser {
  type: ActionType.LOGOUTUSER
}

export interface SignInUser {
  type: ActionType.SIGNINUSER,
  payload: UserSignInCredentials
}

export interface ActiveUserAccount {
  type: ActionType.ACTIVEUSERACCOUNT,
  payload: string
}


