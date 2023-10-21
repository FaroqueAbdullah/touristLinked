class ThemeStorageService {
  getThemeData() {
    const themeType = localStorage.getItem('theme');
    return themeType;
  }
  setThemeUser(theme: string) {
    localStorage.setItem('theme', theme);
  }
  removeThemeUser() {
    localStorage.removeItem('theme');
  }
}
export default new ThemeStorageService();
