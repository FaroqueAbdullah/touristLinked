class TokenService {
  
  getLocalUserData() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  setLocalUser(auth: object) {
    localStorage.setItem("user", JSON.stringify(auth));
  }
  removeLocalUser() {
    localStorage.removeItem("user");
  }
}
export default new TokenService();