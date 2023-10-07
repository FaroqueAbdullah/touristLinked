class TokenService {
  getLocalRefreshToken() {
    const auth = JSON.parse(localStorage.getItem("auth") || '{}');
    return auth?.data.refreshToken;
  }

  getLocalAccessToken() {
    const auth = JSON.parse(localStorage.getItem("auth") || '{}');
    return auth?.data.accessToken;
  }
  updateLocalAccessToken(token: string) {
    let auth = JSON.parse(localStorage.getItem("auth") || '{}');
    auth.accessToken = token;
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  getLocalUserData() {
    return JSON.parse(localStorage.getItem("auth") || '{}' );
  }
  setLocalUser(auth: object) {
    localStorage.setItem("auth", JSON.stringify(auth));
  }
  removeLocalUser() {
    localStorage.removeItem("auth");
  }
}
export default new TokenService();