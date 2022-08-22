import { Link } from "react-router-dom";

function IconMain(): React.ReactElement {
  return (
    <Link to="/">
      <div className='flex text-xl mobile:text-2xl font-bold cursor-pointer text-gray-700'>
        Tourist
        <span className='bg-white pl-1 pr-1 bg-white-primary text-green-primary font-bold rounded-lg ml-1'>
          Linked
        </span>
      </div>
    </Link>
    
  );
}

export default IconMain;