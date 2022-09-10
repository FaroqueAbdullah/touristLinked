import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import ButtonPrimary from '@/components/ButtonPrimary';
import IconMain from "@/components/IconMain";
import InputField from '@/components/InputField';
import SMediaContainer from '@/components/SocialMediaButtons';

import { logInUser } from '@/store/asyncThunk/userThunk';
import { AppDispatch } from '@/store/index'

type LoginCredentials = {
  emailOrUsername: string;
  password: string;
};

function Login():React.ReactElement {
  let navigate = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();

  const dispatch = useDispatch<AppDispatch>();
  
  const onSubmit = ( data: LoginCredentials ) => {
    dispatch(logInUser( data ) )
      .then( ( data ) => {
        console.log('safdasdf')
        if ( data.type === "/auth/login/fulfilled" ) {
          navigate('/')
        }
      })
  };

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
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <InputField 
            type={'text'} 
            placeholder={'Email or Username'} 
            error={errors.emailOrUsername ? 'Please check the email' : ''}
            additionalProps={
              {...register("emailOrUsername",
                { 
                  required: true, 
                  minLength: 3
                })
              }
            }
          />
          <InputField 
            type={'text'} 
            placeholder={'Password'} 
            error={errors.password ? 'Please check the Password' : ''}
            additionalProps={
              {...register("password",
                { required: true, 
                  minLength: 5
                })
              }
            }
          />
          <ButtonPrimary text={"Submit"} />
        </form>
        <SMediaContainer type={'Log Up'} />
      </div>
    </div>
  );
}

export default Login;