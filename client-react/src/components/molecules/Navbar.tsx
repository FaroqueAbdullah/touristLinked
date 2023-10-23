import { useContext, useEffect, useState } from 'react';
import AppBar, {AppBarProps} from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
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
import { Typography } from '../atoms';
import { useNavigate } from "react-router-dom";


const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const settings = ['Profile', 'Settings', 'Logout'];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { palette } = useTheme();
  const navigate = useNavigate();

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

  const onProfileLink = () => {
    navigate("/tourist/me")
  }

  const onLogOut = () => {
    navigate("/auth/login")
  }

  const onSettingLink = () => {
    navigate("/tourist/me")
  }


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
              <IconButton onClick={() => navigate("/notification")} sx={{ paddingLeft: "10px" }}>
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
              <MenuItem onClick={onProfileLink}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={onSettingLink}>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
              <MenuItem onClick={onLogOut}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
}
export default NavBar;