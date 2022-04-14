import { FaUserFriends, FaComment, FaBell, FaUser } from 'react-icons/fa';

function HeaderComponent() {
  return (
    <div className='h-12 bg-green-100'>
      <div className='w-100 h-full flex flex-row justify-center'>
        <div className='basis-1/4 pl-10 flex items-center text-2xl font-bold cursor-pointer text-gray-700'>
          Tourist
          <span className='bg-white pl-1 pr-1 text-green-500 font-bold rounded-lg ml-1'>
            Linked
          </span>
        </div>
        <div className='basis-3/4 pr-10 flex items-center justify-end'>
          <ul className='flex flex-row'>
            <li className='pl-4 pr-4 text-3xl cursor-pointer text-gray-700'> <FaUserFriends /></li>
            <li className='pl-4 pr-4 text-3xl cursor-pointer text-gray-700'> <FaComment /></li>
            <li className='pl-4 pr-4 text-3xl cursor-pointer text-gray-700'> <FaBell /> </li>
            <li className='pl-4 pr-4 text-3xl cursor-pointer text-gray-700'> <FaUser /> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;