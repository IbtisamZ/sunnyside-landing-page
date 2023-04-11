import { Box, Typography } from '@mui/material';
import Testimonial from './Testimonial/Testimonial';

const ClientTestimonial = () => {
  console.log('kk');
  return (
      <Box
          sx={{
            width: 1,
            py: 4,
            backgroundColor: 'white',
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
                  }}
              >
                  CLIENT TESTIMONIALS
              </Typography>
          </Box>
          <Testimonial />
      </Box>
  );
};

export default ClientTestimonial;
