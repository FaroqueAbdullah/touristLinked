import { useContext, useState } from 'react';
import AppBar, {AppBarProps} from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import ColorModeContext from '@/context/colorContext';
import { styled } from '@mui/material/styles';
import BrandLogo from '../atoms/Logo';
import { ColorMode } from '../atoms';

const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { toggleColorMode } = useContext(ColorModeContext);

  const toggleTheme = () => {
    toggleColorMode();
  };

  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <BrandLogo />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Dark mode">
              <IconButton onClick={toggleTheme} sx={{ p: 0 }}>
                <ColorMode  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ paddingLeft: "10px" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
}
export default NavBar;