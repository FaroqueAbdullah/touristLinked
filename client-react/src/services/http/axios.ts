import axios, { AxiosRequestConfig } from "axios";

import TokenService from "@/services/storage/token";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
// instance.interceptors.request.use(
//   async (config: AxiosRequestConfig) => {
//   console.log('api callllllllll use', config)

//     const token = TokenService.getLocalAccessToken();
//     if (token && ( config.headers !== undefined )) {
//       config.headers["Authorization"] = token;  
//     }
//     console.log('api callllllllll config', config)
//     return config;
//   },
//   (error) => {
//     console.log('api callllllllll error', error)
//     return Promise.reject(error);
//   }
// );
// instance.interceptors.response.use(
//   (res) => {
//     console.log('api callllllllll res', res)
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     console.log('api callllllllll url', originalConfig.url)
//     if (originalConfig.url !== "/auth/login" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         try {
//           const rs = await instance.post("/auth/refreshtoken", {
//             refreshToken: TokenService.getLocalRefreshToken(),
//           });
//           const { accessToken } = rs.data;
//           TokenService.updateLocalAccessToken(accessToken);
//           return instance(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }
//     return Promise.reject(err);
//   }
// );

export default instance;