import { AppDispatch } from "@/store";
import { createUser } from "@/store/asyncThunk/userThunk";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from '../../../components/ButtonPrimary';
import IconMain from "../../../components/IconMain";
import InputField from '../../../components/InputField';
import SMediaContainer from '../../../components/SocialMediaButtons';

type SigninCredentials = {
  firstName : string,
	lastName : string,
	username : string,
	email : string,
	password : string,
	confirmPassword : string
};

function SignUp():React.ReactElement {
  let navigate = useNavigate(); 

  const { register, handleSubmit, formState: { errors } } = useForm<SigninCredentials>();

  const dispatch = useDispatch<AppDispatch>();
  
  const onSubmit = ( data: SigninCredentials ) => {
    dispatch(createUser( data ) )
      .then( ( data ) => {
        if ( data.type === "/auth/register/fulfilled" ) {
          navigate('/')
        }
      })
  }

  return (
    <div className="flex mobile:flex-row flex-col">
      <div className="flex flex-col items-center justify-center p-5 border-b-2 border-b-white-primary mobile:border-r-2 mobile:border-r-white-primary">
       <IconMain />
       <div className="text-lg mt-2 text-white-primary">Where we connect all tourist</div>
       <div className="text-sm mt-2 ">Have an account ?</div>
       <ButtonPrimary text={"Log In"} onClick={() =>  navigate('/auth/login')} />
      </div>
      <div className="flex flex-col p-2 mobile:p-5 min-w-max w-96">
        <div className="text-2xl font-bold mb-2">Sign In</div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <InputField 
            type={'text'} 
            placeholder={'First Name'} 
            error={''}
            additionalProps={
              {...register("firstName",
                { 
                  required: true
                })
              }
            }
          />
          <InputField 
            type={'text'} 
            placeholder={'Last Name'} 
            error={''}
            additionalProps={
              {...register("lastName",
                { 
                  required: true
                })
              }
            }
          />
          <InputField 
            type={'text'} 
            placeholder={'User name'} 
            error={''}
            additionalProps={
              {...register("username",
                { 
                  required: true
                })
              }
            }
          />
          <InputField 
            type={'email'} 
            placeholder={'Email'} 
            error={''}
            additionalProps={
              {...register("email",
                { 
                  required: true
                })
              }
            }
          />
          <InputField 
            type={'text'} 
            placeholder={'Password'} 
            error={''}
            additionalProps={
              {...register("password",
                { 
                  required: true
                })
              }
            }
          />
          <InputField 
            type={'text'} 
            placeholder={'Confirm Password'} 
            error={''}
            additionalProps={
              {...register("confirmPassword",
                { 
                  required: true
                })
              }
            }
          />
          <ButtonPrimary text={"Submit"} />
        </form>
        <SMediaContainer type={'Sign Up'} />
      </div>
    </div>
  );
}

export default SignUp;