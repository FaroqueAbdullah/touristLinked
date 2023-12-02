import http from '@/services/http/axios';
import { UserToken, UserTypes } from '@/types/user.types';

const createUser = ( data: UserTypes ) => {
    return http.post('/auth/register', data);
};

const loginUser = ( data: Partial<UserTypes> ) => {
    const user = http.post('/auth/login', data);
    return user;
};

const forgetPassword = ( data: Partial<UserTypes> ) => {
    return http.post('/auth/forgot-password', data);
};

const verifyPasswordToken = ( data: UserToken ) => {
    return http.post('/auth/verify-token', data);
};

const resetPassword = ( data: Partial<UserTypes> ) => {
    return http.post('/auth/reset-password', data);
};

const activateUser = ( data: UserToken ) => {
    return http.post('/auth/activate-account', data);
};

const checkUserName = ( data: string ) => {
    return http.post('/auth/check-username', data);
};

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
