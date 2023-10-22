import breakpoints from '@/utils/breakpoint';
import { darkThemeColors, lightThemeColors } from '@/utils/color';
import { typography } from '@/utils/typography';
import { createTheme } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';

import themeStorageService from '@/services/storage/theme';

const themeSettings = (mode: string) => ({
  ...(mode === 'dark' ? darkThemeColors : lightThemeColors),
});

const useMode = () => {
  const [mode, setMode] = useState(() => {
    const colorMode = themeStorageService.getThemeData()
    return colorMode ? colorMode : 'light'
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(( prev) => prev === 'light' ? 'dark' : 'light');
      },
    }),
    []
  );

  useEffect(() => {
    themeStorageService.setThemeUser(mode)
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: themeSettings(mode),
        typography,
        breakpoints
      }),
    [mode]
  );

  return { theme, colorMode };
};

export default useMode;
