import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { AppContainerStyled, BodyContainerStyled } from './components/StyledComponents/StyledComponents'
import HeaderLayout from './layout/Header/Header';
import FooterLayout from './layout/Footer/Footer';

const HomeCompoment = lazy(() => import('./pages/Home/Home'));
const ProfileCompoment = lazy(() => import('./pages/Profile/Profile'));
const AuthComponent = lazy(() => import('./pages/Auth/Auth'));


function App() {
  return (
    <AppContainerStyled>
      <HeaderLayout />
      <BodyContainerStyled>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeCompoment />} />
              <Route path="profile/" element={<ProfileCompoment />} />
              <Route path='AuthComponent/' element={<AuthComponent />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </BodyContainerStyled>
    </AppContainerStyled>
  );
}

export default App;
