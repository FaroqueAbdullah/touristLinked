import IconMain from "./IconMain";

interface AuthProps {
  formElement: JSX.Element[] | JSX.Element;
}

function AuthMainComponent(formElement: AuthProps) {
  console.log(formElement)
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col items-center justify-center p-10 border-2 md:border-r-green-500">
       <IconMain />
       <div className="text-lg mt-2">Welcome Back !</div>
      </div>
      <div className="flex flex-col p-5 min-w-max w-96">
        <div className="text-2xl font-bold mb-5">Log In</div>
        {/* <formElement /> */}
        <div className="pt-1 pb-2">Or</div>
        <div className="bg-green-500 font-bold rounded-lg mt-2 mb-2 p-1 text-center">Log in with Facebook</div>
        <div className="bg-green-500 font-bold rounded-lg mt-2 mb-2 p-1 text-center">Log in with Google</div>
      </div>
    </div>
  );
}

export default AuthMainComponent;