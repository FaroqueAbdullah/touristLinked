import React from 'react';

import { AppContainerStyled, BodyContainerStyled } from './components/StyledComponents/StyledComponents'
import HeaderLayout from './layout/Header/Header';
import FooterLayout from './layout/Footer/Footer';


function App() {
  return (
    <AppContainerStyled>
      <HeaderLayout />
      <BodyContainerStyled>jsdflkjsalkdfj</BodyContainerStyled>
      <FooterLayout />
    </AppContainerStyled>
  );
}

export default App;
