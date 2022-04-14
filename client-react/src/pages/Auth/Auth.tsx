import { useEffect } from "react";
import Login from "./Login/Login";
import SignUp from "./Signin/Signin";

interface AuthProps {
  isAuthPage: (val: boolean) => void,
}

function AuthComponent({isAuthPage}: AuthProps) {

  useEffect(()=> {
    isAuthPage(true)
    return () => {
      isAuthPage(false)
    }
  },[])

  return (
    <div className="w-100 p-5 h-full flex justify-center items-center">
      <div className="bg-green-100 m-5 min-w-full sm:min-w-fit">
        <Login />
      </div>
    </div>
  );
}

export default AuthComponent;