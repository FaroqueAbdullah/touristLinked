import http from '@/services/http/axios';

const createUser = ( data: any ) => {
  return http.post("/auth/register", data)
}

const loginUser = ( data: any ) => {
  return http.post("/auth/login", data)
}

const forgetPassword = ( data: any ) => {
  return http.post("/auth/forgot-password", data)
}

const verifyPasswordToken = ( data: any ) => {
  return http.post("/auth/verify-token", data)
}

const resetPassword = ( data: any ) => {
  return http.post("/auth/reset-password", data)
}

const activateUser = ( data: any ) => {
  return http.post("/auth/activate-account", data)
}

const checkUserName = ( data: any ) => {
  return http.post("/auth/check-username", data)
}

const UserService = {
  createUser,
  loginUser,
  forgetPassword,
  verifyPasswordToken,
  resetPassword,
  activateUser,
  checkUserName
};

export default UserService;
