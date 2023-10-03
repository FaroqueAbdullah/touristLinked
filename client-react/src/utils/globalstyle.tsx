import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

const Styles = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: theme.palette.background.default,
          margin: 0,
          padding: '1rem',
        },
      }}
    />
  );
};

export default Styles;
