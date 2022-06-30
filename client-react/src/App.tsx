import  { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderLayout from './layout/Header/Header';

const HomeCompoment = lazy(() => import('./pages/Home/Home'));
const ProfileCompoment = lazy(() => import('./pages/Profile/Profile'));
const AuthComponent = lazy(() => import('./pages/Auth/Auth'));


function App() {

  const [isAuthRoute, setIsAuthRoute] = useState(false)
  const [isAuthenticate, setIsAuthenticate] = useState(true)
  
  let isAuthPage = (value: boolean) => {
    setIsAuthRoute(value)
  }


  return (
    <div className='font-serif h-screen flex flex-col'>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {!isAuthRoute && <HeaderLayout isAuthenticate = {isAuthenticate} /> }
          <div className='h-[calc(100vh-3rem)]'>
            <Routes>
              <Route path="/" element={<HomeCompoment />} />
              <Route path="/profile" element={<ProfileCompoment />} />
              <Route path='/auth/*' 
                element={<AuthComponent isAuthPage={( val: boolean ) => isAuthPage(val)} />} 
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
