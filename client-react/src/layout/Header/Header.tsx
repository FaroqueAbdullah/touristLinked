import { FaUserFriends, FaComment, FaBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IconMain from '../../components/IconMain';

interface HeaderProps {
  isAuth: boolean;
  isAuthenticate: boolean
}

function HeaderComponent({isAuth, isAuthenticate}: HeaderProps) {
  return (
    <div className={`w-100 h-12 bg-green-secondary ${isAuth ? 'hidden' : ''}`}>
      <div className='w-100 m-auto h-12 flex flex-row justify-center max-w-screen-desktop pr-4 pl-4'>
        <div className='basis-1/4 flex items-center'>
          <IconMain />
        </div>
        <div className='basis-3/4 flex items-center justify-end'>
          {
            isAuthenticate ?
            <ul className='flex flex-row'>
              <li className='pl-2 pr-2 text-xl tablet:pl-4 tablet:pr-4 tablet:text-3xl cursor-pointer text-gray-700'>
                <Link to="/profile"><FaUserFriends /></Link>
              </li>
              <li className='pl-2 pr-2 text-xl tablet:pl-4 tablet:pr-4 tablet:text-3xl cursor-pointer text-gray-700'> 
                <FaComment />
              </li>
              <li className='pl-2 pr-2 text-xl tablet:pl-4 tablet:pr-4 tablet:text-3xl cursor-pointer text-gray-700'> 
                <FaBell />
              </li>
              <li className='pl-2 text-xl tablet:pl-4 tablet:pr-4 tablet:text-3xl cursor-pointer text-gray-700'> 
                <FaUser /> 
              </li>
            </ul>
            : 
            <ul>
              <li className='pl-4 text-3xl cursor-pointer text-gray-700'> <Link to="/auth/login"><FaUser /></Link></li>
            </ul>
          }
          
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;