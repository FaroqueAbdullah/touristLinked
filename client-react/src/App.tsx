import  { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContainerStyled, BodyContainerStyled } from './components/StyledComponents/StyledComponents'
import HeaderLayout from './layout/Header/Header';

const HomeCompoment = lazy(() => import('./pages/Home/Home'));
const ProfileCompoment = lazy(() => import('./pages/Profile/Profile'));
const AuthComponent = lazy(() => import('./pages/Auth/Auth'));


function App() {

  const [isAuthRoute, setIsAuthRoute] = useState(false)
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  
  let isAuthPage = (value: boolean) => {
    setIsAuthRoute(value)
  }


  return (
    <AppContainerStyled>
      <BodyContainerStyled>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <HeaderLayout isAuth = {isAuthRoute} isAuthenticate = {isAuthenticate} />
            <Routes>
              <Route path="/" element={<HomeCompoment />} />
              <Route path="/profile" element={<ProfileCompoment />} />
              <Route path='/auth/*' 
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
