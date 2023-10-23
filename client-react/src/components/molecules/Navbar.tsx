import { useContext, useEffect, useState } from 'react';
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
import Badge from '@mui/material/Badge';
import { MailIcon, WbSunnyIcon } from '../icons';
import { useTheme } from "@mui/material";

const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { palette } = useTheme();

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
    <CustomAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <BrandLogo />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={palette.mode === 'light' ? 'Dark Mode' : 'Light Mode'}>
              <IconButton onClick={toggleTheme} sx={{ paddingLeft: "10px" }}>
                <WbSunnyIcon  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notification">
              <IconButton onClick={handleOpenUserMenu} sx={{ paddingLeft: "10px" }}>
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
              </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ paddingLeft: "10px" }}>
                <Avatar alt="Remy Sharp" src="" sx={{ width: 24, height: 24 }}/>
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