import { Box, Typography } from '@mui/material';
import { ArrowDownIcon } from '../assets/icons';
import { hero } from '../assets/images';
import AppBar from './AppBar/AppBar';

const Hero = () => (
    <>
        <AppBar />
        <Box
            sx={{
              height: 650,
              width: 1,
              backgroundImage: `url(${hero})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center',
            }}
        >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
                <Box sx={{ mb: 7 }}>
                    <Typography
                        color="common.white"
                        variant="h3"
                        sx={{
                          fontFamily: 'Fraunces',
                          fontWeight: 600,
                          letterSpacing: 8,
                          textAlign: 'center',
                          textTransform: 'uppercase',
                        }}
                    >
                        We are Creatives
                    </Typography>
                </Box>
                <Box>
                    <ArrowDownIcon />
                </Box>
            </Box>
        </Box>
    </>
);

export default Hero;
