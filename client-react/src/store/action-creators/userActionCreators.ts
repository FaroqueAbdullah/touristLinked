import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { LogInUser, LogOutUser, UserLogInCredentials, UserSignInCredentials, SignInUser } from "../actions/userActions"

const logInUser = ( userCredentials: UserLogInCredentials ) => {
  return ( dispatch: Dispatch<LogInUser> ) => {
    dispatch({
      type: ActionType.LOGINUSER,
      payload: userCredentials
    })
  }
}

const logoutUser = () => {
  return ( dispatch: Dispatch<LogOutUser> ) => {
    dispatch({
      type: ActionType.LOGOUTUSER
    })
  }
}

const signInUser = ( userCredentials: UserSignInCredentials ) => {
  return ( dispatch: Dispatch<SignInUser> ) => {
    dispatch({
      type: ActionType.SIGNINUSER,
      payload: userCredentials
    })
  }
}