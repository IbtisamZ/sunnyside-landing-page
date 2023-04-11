import {
  Box,
  Menu,
  Button,
  Toolbar,
  MenuItem,
  Typography,
  IconButton,
  AppBar as MUIAppBar,
} from '@mui/material';
import { useState } from 'react';
import { MenuIcon } from '../../assets/icons';

const NavigationButton = ({ children, isLast }) => (
    <Button
        disableRipple
        sx={{
          mx: 2,
          py: 1.5,
          fontSize: 14,
          fontWeight: 600,
          borderRadius: 8,
          px: isLast ? 3 : 0,
          color: isLast ? 'common.black' : 'common.white',
          backgroundColor: isLast ? 'common.white' : 'transparent',
          fontFamily: isLast ? 'Fraunces' : 'Barlow',
          textTransform: isLast ? 'uppercase' : 'none',
          '&:hover': {
            mx: 2,
            borderRadius: 8,
            fontWeight: 600,
            px: isLast ? 3 : 0,
            color: isLast ? 'common.white' : 'common.tangerineYellow',
            backgroundColor: isLast ? 'common.transparentWhite' : 'transparent',
          },
        }}
    >
        {children}
    </Button>
);

const AppBar = () => {
  const navigations = ['About', 'Services', 'Projects', 'Contact'];
  const lastNav = navigations.slice(-1)[0];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <MUIAppBar
          sx={{
            backgroundColor: 'common.pictonBlue',
            boxShadow: 'none',
            position: 'static',
            pb: { xs: 8, md: 14 },
            pt: 2,
            px: 3,
          }}
      >
          <Toolbar sx={{ mb: 2 }}>
              <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  color="text.main"
                  sx={{
                    flexGrow: 1,
                    fontFamily: 'Barlow',
                    fontWeight: 800,
                  }}
              >
                  sunnyside
              </Typography>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                  >
                      <MenuIcon />
                  </IconButton>
                  <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiPaper-root': {
                          p: 1,
                          mr: 5,
                          mt: 4,
                          width: 300,
                          display: 'flex',
                          justifyContent: 'center',
                          boxShadow: 'none',
                          borderRadius: 0,
                        },
                      }}
                  >
                      {navigations.map((item) => (
                          <MenuItem
                              key={item}
                              onClick={handleCloseNavMenu}
                              sx={{
                                px: 3,
                                my: 2,
                                borderRadius: 12,
                                display: 'flex',
                                justifyContent: 'center',
                                textTransform: item === lastNav ? 'uppercase' : 'none',
                                backgroundColor: item === lastNav ? 'common.cyberYellow' : 'transparent',
                                color: item === lastNav ? 'common.black' : 'common.gray2',
                                '&:hover': {
                                  borderRadius: 12,
                                  backgroundColor: item === lastNav ? 'common.cyberYellow' : 'transparent',
                                  color: item === lastNav ? 'common.white' : 'common.black',
                                },
                              }}
                          >
                              <Typography
                                  textAlign="center"
                                  sx={{
                                    fontFamily: item === lastNav ? 'Fraunces' : 'Barlow',
                                    fontWeight: 600,
                                    fontSize: 14,
                                  }}
                              >
                                  {item}
                              </Typography>
                          </MenuItem>
                      ))}
                  </Menu>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  {navigations.map((item) => (
                      <NavigationButton
                          key={item}
                          isLast={item === lastNav}
                          sx={{ color: 'common.white', display: 'block' }}
                      >
                          {item}
                      </NavigationButton>
                  ))}
              </Box>
          </Toolbar>
      </MUIAppBar>
  );
};

export default AppBar;
