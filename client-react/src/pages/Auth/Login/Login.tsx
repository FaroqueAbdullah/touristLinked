function Login() {
  return (
    <div className="flex flex-row">
      <div>Welcome back</div>
      <div className="flex flex-col">
        <div>Log in with Google</div>
        <div>Log in with Facebook</div>
        <input type="text" />
        <input type="password" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Login;