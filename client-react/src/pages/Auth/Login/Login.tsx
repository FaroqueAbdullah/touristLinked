import IconMain from "../../../components/IconMain";

function Login() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center p-10 border-2 border-r-green-500">
       <IconMain />
       <div className="text-lg">Welcome Back !</div>
      </div>
      <div className="flex flex-col p-5 min-w-max w-96">
        <div>Log in</div>
        <div>Log in with Facebook</div>
        <form className="flex flex-col">
          <label className="flex">
            <span className="w-24">Email:</span>
            <input className="h-10 w-60 bg-slate-50" type="text" />
          </label>
          <label className="flex mt-5">
            <span className="w-24">Password:</span>
            <input type="password" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;