import axios, { AxiosRequestConfig } from "axios";

import tokenService from "@/services/storage/token";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // update config here
  
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    if (res.config.url === "/auth/login") {
      tokenService.setLocalUser(res.data.data.user)
    }
    return res.data;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response.status === 401) {
      tokenService.removeLocalUser()
    }
    
    // if (originalConfig.url !== "/auth/login" && err.response) {
      // Access Token was expired
      // if (err.response.status === 401 && !originalConfig._retry) {
      //   originalConfig._retry = true;
      //   try {
      //     const rs = await instance.post("/auth/refreshtoken", {
      //       refreshToken: TokenService.getLocalRefreshToken(),
      //     });
      //     const { accessToken } = rs.data;
      //     TokenService.updateLocalAccessToken(accessToken);
      //     return instance(originalConfig);
      //   } catch (_error) {
      //     return Promise.reject(_error);
      //   }
      // }
    // }
    return Promise.reject(err.response.data);
  }
);

export default instance;