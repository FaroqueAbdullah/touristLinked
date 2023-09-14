import { useTheme } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";

const Styles = () => {
  const theme = useTheme()
  
  return (
    <GlobalStyles
      styles={{
        body: { backgroundColor: theme.palette.background.default }
      }}
    />
  )
}

export default Styles;