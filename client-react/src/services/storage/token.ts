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
  getUser() {
    return JSON.parse(localStorage.getItem("auth") || '{}' );
  }
  setUser(auth: object) {
    localStorage.setItem("auth", JSON.stringify(auth));
  }
  removeUser() {
    localStorage.removeItem("auth");
  }
}
export default new TokenService();