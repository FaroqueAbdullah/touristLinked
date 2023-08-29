import {
  FaUserFriends,
  FaComment,
  FaBell,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import IconMain from '../../components/IconMain';
import { AppDispatch } from '@/store/index';
import { logOutUser } from '@/store/asyncThunk/userThunk';

interface HeaderProps {
  isAuthenticate: boolean;
}

function HeaderComponent({ isAuthenticate }: HeaderProps): React.ReactElement {
  const user = useSelector((state) => state.auth.userProfile);
  const dispatch = useDispatch<AppDispatch>();

  const logoutUserHandler = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="w-100 bg-green-secondary ">
      <div className="w-100 m-auto flex h-16 max-w-screen-laptop flex-row justify-center pl-4 pr-4">
        <div className="flex basis-1/4 items-center">
          <IconMain />
        </div>
        <div className="flex basis-3/4 items-center justify-end">
          {Object.keys(user).length ? (
            <ul className="flex flex-row">
              <li className="text-gray-700 cursor-pointer pl-2 pr-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl">
                <Link to="/profile">
                  <FaUserFriends />
                </Link>
              </li>
              <li className="text-gray-700 cursor-pointer pl-2 pr-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl">
                <FaComment />
              </li>
              <li className="text-gray-700 cursor-pointer pl-2 pr-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl">
                <FaBell />
              </li>
              <li
                onClick={logoutUserHandler}
                className="text-gray-700 cursor-pointer pl-2 text-xl mobile:pl-4 mobile:pr-4 mobile:text-3xl"
              >
                <FaSignOutAlt />
              </li>
            </ul>
          ) : (
            <ul>
              <li className="text-gray-700 cursor-pointer pl-4 text-3xl">
                {' '}
                <Link to="/auth/login">
                  <FaUser />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
