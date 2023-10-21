import breakpoints from '@/utils/breakpoint';
import { darkThemeColors, lightThemeColors } from '@/utils/color';
import { typography } from '@/utils/typography';
import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

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
        const updatedMode = mode === 'dark' ? 'light' : 'dark'
        setMode(updatedMode);
        themeStorageService.setThemeUser(updatedMode)
      },
    }),
    []
  );

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
