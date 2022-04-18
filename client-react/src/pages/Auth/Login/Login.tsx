import { FaFacebookSquare, FaGooglePlusG } from 'react-icons/fa';

import IconMain from "../../../components/IconMain";

function Login() {
  return (
    <div className="flex tablet:flex-row flex-col">
      <div className="flex flex-col items-center justify-center p-10 border-b-2 border-b-white-primary tablet:border-r-2 tablet:border-r-white-primary">
       <IconMain />
       <div className="text-lg mt-2 text-white-primary">Welcome Back !</div>
       <div className="text-sm mt-2 ">Create new Account</div>
       <button className="text-sm mt-2 bg-green-primary text-white-primary font-bold rounded-lg p-1 w-full">Sign In</button>
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
          <button className="bg-green-primary text-white-primary font-bold rounded-lg mt-5 mb-5 p-1">Submit</button>
        </form>
        <div className="pt-1 pb-2">Or</div>
        <button className="bg-facebook-primary text-white-primary rounded-lg mt-2 mb-2 p-1 text-center flex items-center justify-center"> 
          <FaFacebookSquare className='mr-2 font-extrabold' />Log in with Facebook
        </button>
        <button className="bg-google-primary text-white-primary rounded-lg mt-2 mb-2 p-1 text-center flex items-center justify-center">
          <FaGooglePlusG className='mr-2 font-extrabold' /> Log in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;