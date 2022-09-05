import { useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ButtonPrimary from '@/components/ButtonPrimary';
import IconMain from "@/components/IconMain";
import InputField from '@/components/InputField';
import SMediaContainer from '@/components/SocialMediaButtons';

import { createUser } from '@/store/asyncThunk/userThunk';
import { AppDispatch } from '@/store/index'



function Login():React.ReactElement {
  let navigate = useNavigate(); 

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    dispatch(createUser({
      "username" : "abir007",
      "password" : "123456"
    }) ).unwrap()
  }, [])

  return (
    <div className="flex mobile:flex-row flex-col">
      <div className="flex flex-col items-center justify-center p-10 border-b-2 border-b-white-primary mobile:border-r-2 mobile:border-r-white-primary">
       <IconMain />
       <div className="text-lg mt-2 text-white-primary">Welcome Back !</div>
       <div className="text-sm mt-2 ">Create new Account</div>
       <ButtonPrimary text={"Sign In"} onClick={() =>  navigate('/auth/signup')} />
      </div>
      <div className="flex flex-col p-5 min-w-max w-96">
        <div className="text-2xl font-bold mb-5">Log In</div>
        <form className="flex flex-col">
          <InputField 
              type={'email'} 
              label={'Email'} 
              value={''} 
              onChange={() => {}}
              placeholder={'Email'} 
              error={''} 
            />
            <InputField 
              type={'text'} 
              label={'Password'} 
              value={''} 
              onChange={() => {}}
              placeholder={'Password'} 
              error={''} 
            />
          <ButtonPrimary text={"Submit"} onClick={() => {}} />
        </form>
        <SMediaContainer type={'Log Up'} />
      </div>
    </div>
  );
}

export default Login;