import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
} from '@mui/material';

import {
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  InstagramIcon,
} from '../assets/icons';

const SocialMedia = ({ icon }) => (
    <IconButton
        disableRipple
        size="small"
        sx={{
          mx: 1,
          '&:hover path': {
            fill: 'white',
          },
        }}
    >
        {icon}
    </IconButton>
);

const StyledButton = ({ children }) => (
    <Button
        disableRipple
        sx={{
          mx: 4,
          textTransform: 'none',
          color: 'common.darkDesaturatedCyan',
          fontFamily: 'Barlow',
          fontWeight: 500,
          fontSize: 16,
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'common.white',
          },
        }}
    >
        {children}
    </Button>
);

const Footer = () => {
  const platforms = [
    {
      id: 'facebook',
      icon: <FacebookIcon />,
    },
    {
      id: 'instagram',
      icon: <InstagramIcon />,
    },
    {
      id: 'twitter',
      icon: <TwitterIcon />,
    },
    {
      id: 'pinterest',
      icon: <PinterestIcon />,
    },
  ];

  const navItems = ['About', 'Services', 'Projects'];

  const footerNav = navItems.map((nav) => (
      <Box key={nav}>
          <StyledButton>
              {nav}
          </StyledButton>
      </Box>
  ));

  const footerIcons = platforms.map(({ id, icon }) => (
      <Box key={id}>
          <SocialMedia icon={icon} />
      </Box>
  ));

  return (
      <Box
          sx={{
            width: 1,
            minHeight: 350,
            backgroundColor: 'common.pearlAqua',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
      >
          <Box mb={4}>
              <Typography
                  variant="h4"
                  color="common.darkDesaturatedCyan"
                  sx={{
                    fontFamily: 'Barlow',
                    fontWeight: 800,
                  }}
              >
                  sunnyside
              </Typography>
          </Box>
          <Box
              mb={10}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
          >
              {footerNav}
          </Box>
          <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
          >
              {footerIcons}
          </Stack>
          <Box mt={4}>
              <Typography
                  sx={{
                    fontSize: 10,
                    color: 'common.darkDesaturatedCyan',
                  }}
              >
                  Challenge by FrontendMentor.io - Coded by IbtisamZ.
              </Typography>
          </Box>
      </Box>
  );
};

export default Footer;
