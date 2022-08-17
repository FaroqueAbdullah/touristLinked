import  { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";


type AppProviderProps = {
  children: React.ReactNode;
};


export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <div className='font-serif h-screen flex flex-col'>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Suspense>
    </div>
  );
};