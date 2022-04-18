import IconMain from "../../../components/IconMain";

function Login() {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col items-center p-10 border-2 md:border-r-green-500">
       <IconMain />
       <div className="text-lg">Welcome Back !</div>
      </div>
      <div className="flex flex-col p-5 min-w-max w-96">
        <div className="text-2xl font-bold mb-5">Log In</div>
        <form className="flex flex-col">
          <label className="flex">
            <span className="w-20">Email:</span>
            <input className="h-8 p-2 w-60 bg-slate-50" type="text" />
          </label>
          <label className="flex mt-5">
            <span className="w-20">Password:</span>
            <input className="h-8 p-2 w-60 bg-slate-50" type="password" />
          </label>
          <button className="bg-green-500 font-bold rounded-lg mt-5 mb-5 p-1">Submit</button>
        </form>
        <div className="pt-1 pb-2">Or</div>
        <div className="bg-green-500 font-bold rounded-lg mt-2 mb-2 p-1 text-center">Log in with Facebook</div>
        <div className="bg-green-500 font-bold rounded-lg mt-2 mb-2 p-1 text-center">Log in with Google</div>
      </div>
    </div>
  );
}

export default Login;