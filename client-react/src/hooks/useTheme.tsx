import { darkThemeColors, lightThemeColors } from '@/utils/color';
import { typography } from '@/utils/typography';
import { createTheme } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';

const themeSettings = (mode: string) => ({
  ...(mode === 'dark' ? darkThemeColors : lightThemeColors),
});

const useMode = () => {
  const [mode, setMode] = useState<string>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: themeSettings(mode),
        typography
      }),
    [mode]
  );

  return { theme, colorMode };
};

export default useMode;
