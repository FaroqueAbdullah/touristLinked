import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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
  },[isAuthPage])

  return (
    <div className="w-100 p-5 h-full flex justify-center items-center">
      <div className="bg-green-secondary m-5 rounded-md">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthComponent;