import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { AppContainerStyled, BodyContainerStyled } from './components/StyledComponents/StyledComponents'
import HeaderLayout from './layout/Header/Header';
import FooterLayout from './layout/Footer/Footer';
import HomeCompoment from './pages/Home/Home';
import ProfileCompoment from './pages/Profile/Profile';
import AuthComponent from './pages/Auth/Auth';


function App() {
  return (
    <AppContainerStyled>
      <HeaderLayout />
      <BodyContainerStyled>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeCompoment />} />
            <Route path="profile/" element={<ProfileCompoment />} />
            <Route path='AuthComponent/' element={<AuthComponent />} />
          </Routes>
        </BrowserRouter>
      </BodyContainerStyled>
      <FooterLayout />
    </AppContainerStyled>
  );
}

export default App;
