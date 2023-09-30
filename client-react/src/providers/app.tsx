import { Suspense, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '@/store/index';
import useMode from '@/hooks/useTheme';
import { ThemeProvider } from '@mui/material';
import ColorModeContext from '@/context/colorContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { theme, colorMode } = useMode();

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>{children}</BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
};
