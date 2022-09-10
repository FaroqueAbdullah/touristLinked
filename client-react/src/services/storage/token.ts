class TokenService {
  getLocalRefreshToken() {
    const auth = JSON.parse(localStorage.getItem("auth") || '{}');
    return auth?.refreshToken;
  }
  getLocalAccessToken() {
    const auth = JSON.parse(localStorage.getItem("auth") || '{}');
    return auth?.accessToken;
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