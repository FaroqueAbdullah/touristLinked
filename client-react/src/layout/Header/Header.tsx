import { FaUserFriends, FaComment, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import IconMain from '../../components/IconMain';
import { AppDispatch } from '@/store/index';
import { logOutUser } from '@/store/asyncThunk/userThunk';

interface HeaderProps {
  isAuthenticate: boolean
}

function HeaderComponent({ isAuthenticate}: HeaderProps):React.ReactElement {

  const user = useSelector(( state ) => state.auth.userProfile )
  const dispatch = useDispatch<AppDispatch>();

  const logoutUserHandler = () => {
    dispatch(logOutUser() )
  }

  return (
    <div className='w-100 h-12 bg-green-secondary '>
      <div className='w-100 m-auto h-12 flex flex-row justify-center max-w-screen-laptop pr-4 pl-4'>
        <div className='basis-1/4 flex items-center'>
          <IconMain />
        </div>
        <div className='basis-3/4 flex items-center justify-end'>
          {
            Object.keys( user ).length ?
            <ul className='flex flex-row'>
              <li className='pl-2 pr-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl cursor-pointer text-gray-700'>
                <Link to="/profile"><FaUserFriends /></Link>
              </li>
              <li className='pl-2 pr-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl cursor-pointer text-gray-700'> 
                <FaComment />
              </li>
              <li className='pl-2 pr-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl cursor-pointer text-gray-700'> 
                <FaBell />
              </li>
              <li onClick={logoutUserHandler} className='pl-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl cursor-pointer text-gray-700'> 
                <FaSignOutAlt /> 
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