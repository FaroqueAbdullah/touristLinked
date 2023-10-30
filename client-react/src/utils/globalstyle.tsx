import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

const Styles = () => {
  const theme = useTheme();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: theme.palette.background.default,
          margin: 0,
        },
      }}
    />
  );
};

export default Styles;
