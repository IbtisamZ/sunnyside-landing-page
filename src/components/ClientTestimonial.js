import { Box, Typography } from '@mui/material';
import Testimonial from './Testimonial/Testimonial';

const ClientTestimonial = () => (
    <Box
        sx={{
          width: 1,
          py: 4,
          backgroundColor: 'common.milk',
          minHeight: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
    >
        <Box pb={8} pt={4}>
            <Typography
                color="common.gray1"
                variant="h5"
                sx={{
                  fontFamily: 'Fraunces',
                  fontWeight: 700,
                  letterSpacing: 6,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
            >
                Client Testimonial
            </Typography>
        </Box>
        <Testimonial />
    </Box>
);

export default ClientTestimonial;
