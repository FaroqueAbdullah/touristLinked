import { useNavigate } from "react-router-dom";
import ButtonPrimary from '../../../components/ButtonPrimary';
import IconMain from "../../../components/IconMain";
import InputField from '../../../components/InputField';
import SMediaContainer from '../../../components/SocialMediaButtons';

function SignUp() {
  let navigate = useNavigate(); 

  return (
    <div className="flex tablet:flex-row flex-col">
      <div className="flex flex-col items-center justify-center p-5 border-b-2 border-b-white-primary tablet:border-r-2 tablet:border-r-white-primary">
       <IconMain />
       <div className="text-lg mt-2 text-white-primary">Where we connect all tourist</div>
       <div className="text-sm mt-2 ">Have an account ?</div>
       <ButtonPrimary text={"Log In"} onClick={() =>  navigate('/auth/login')} />
      </div>
      <div className="flex flex-col p-2 tablet:p-5 min-w-max w-96">
        <div className="text-2xl font-bold mb-2">Sign In</div>
        <form className="flex flex-col">
          <InputField 
            type={'text'} 
            label={'First Name'}
            value={''} 
            onChange={() => {}}
            placeholder={'First Name'} 
            error={''} 
          />
          <InputField 
            type={'text'} 
            label={'Last Name'}
            value={''} 
            onChange={() => {}}
            placeholder={'Last Name'} 
            error={''} 
          />
          <InputField 
            type={'date'} 
            label={'Birth Date'}
            value={''} 
            onChange={() => {}}
            placeholder={'Birth Date'} 
            error={''} 
          />
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
          <InputField 
            type={'text'} 
            label={'Confirm Password'} 
            value={''} 
            onChange={() => {}}
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