import { ActionType } from '../action-types';
import { LogInUser, LogOutUser, SignInUser, UserLogInCredentials, UserSignInCredentials, ActiveUserAccount } from '../actions/userActions';

type userAction = LogInUser | LogOutUser | SignInUser | ActiveUserAccount;

const initialState = {};

const reducer = (state = initialState, action: userAction) => {
  switch ( action.type ) {
    case ActionType.LOGINUSER:
      return state;
    case ActionType.LOGOUTUSER:
      return state;
    case ActionType.SIGNINUSER:
      return state;
    case ActionType.ACTIVEUSERACCOUNT:
      return state;
    default:
      return state;
  }
}

export default reducer;