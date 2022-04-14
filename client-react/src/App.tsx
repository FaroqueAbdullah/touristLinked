import React, { lazy, Suspense, useEffect, useState } from 'react';
// import { browserHistory } from 'react-router';
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import { AppContainerStyled, BodyContainerStyled } from './components/StyledComponents/StyledComponents'
import HeaderLayout from './layout/Header/Header';

const HomeCompoment = lazy(() => import('./pages/Home/Home'));
const ProfileCompoment = lazy(() => import('./pages/Profile/Profile'));
const AuthComponent = lazy(() => import('./pages/Auth/Auth'));


function App() {

  const [isAuth, setIsAuth] = useState(false)
  
  let isAuthPage = (value: boolean) => {
    setIsAuth(value)
  }


  return (
    <AppContainerStyled>
      <BodyContainerStyled>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <HeaderLayout isAuth = {isAuth}/>
            <Routes>
              <Route path="/" element={<HomeCompoment />} />
              <Route path="profile/" element={<ProfileCompoment />} />
              <Route path='Auth/' 
                element={<AuthComponent isAuthPage={( val: boolean ) => isAuthPage(val)} />} 
              />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </BodyContainerStyled>
    </AppContainerStyled>
  );
}

export default App;
