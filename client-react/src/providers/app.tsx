import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '@/store/index';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </Provider>
  );
};
