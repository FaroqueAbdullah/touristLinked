class TokenService {
  getLocalUserData() {
    return JSON.parse(localStorage.getItem("user") || '{}' );
  }
  setLocalUser(auth: object) {
    localStorage.setItem("user", JSON.stringify(auth));
  }
  removeLocalUser() {
    localStorage.removeItem("user");
  }
}
export default new TokenService();