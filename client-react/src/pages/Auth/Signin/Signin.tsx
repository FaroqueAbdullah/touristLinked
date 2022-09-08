import { useNavigate } from "react-router-dom";
import ButtonPrimary from '../../../components/ButtonPrimary';
import IconMain from "../../../components/IconMain";
import InputField from '../../../components/InputField';
import SMediaContainer from '../../../components/SocialMediaButtons';

function SignUp():React.ReactElement {
  let navigate = useNavigate(); 

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
        <form className="flex flex-col">
          <InputField 
            type={'text'} 
            placeholder={'First Name'} 
            error={''} 
          />
          <InputField 
            type={'text'} 
            placeholder={'Last Name'} 
            error={''} 
          />
          <InputField 
            type={'date'} 
            placeholder={'Birth Date'} 
            error={''} 
          />
          <InputField 
            type={'email'} 
            placeholder={'Email'} 
            error={''} 
          />
          <InputField 
            type={'text'} 
            placeholder={'Password'} 
            error={''} 
          />
          <InputField 
            type={'text'} 
            placeholder={'Password'} 
            error={''} 
          />
          <ButtonPrimary text={"Submit"} onClick={() => {}} />
        </form>
        <SMediaContainer type={'Sign Up'} />
      </div>
    </div>
  );
}

export default SignUp;