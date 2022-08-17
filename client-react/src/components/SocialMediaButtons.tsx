import { FaFacebookSquare, FaGooglePlusG } from "react-icons/fa";

interface SocialMediaButtonsProps {
  type: string;
}

function SMediaContainer({type} : SocialMediaButtonsProps):React.ReactElement {
  return (
    <>
      <div className="pt-1 pb-2">Or</div>
      <button className="bg-facebook-primary text-white-primary rounded-lg mt-2 mb-2 p-1 text-center flex items-center justify-center"> 
        <FaFacebookSquare className='mr-2 font-extrabold' />{type} with Facebook
      </button>
      <button className="bg-google-primary text-white-primary rounded-lg mt-2 mb-2 p-1 text-center flex items-center justify-center">
        <FaGooglePlusG className='mr-2 font-extrabold' /> {type} with Google
      </button>
    </>
  )
}

export default SMediaContainer;