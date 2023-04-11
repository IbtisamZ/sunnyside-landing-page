import {
  Box,
  Stack,
  Button,
  Typography,
} from '@mui/material';
import Gallery from '../Gallery/Gallery';

const About = (props) => {
  const {
    image = '',
    header = '',
    gallerySx = { },
    description = '',
    ctaUnderlineColor = { },
  } = props;

  const {
    before = '',
    after = '',
  } = ctaUnderlineColor;

  return (
      <Stack sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      >
          <Gallery
              image={image}
              gallerySx={{
                height: { xs: 400, md: 600 },
                maxHeight: { xs: 400, md: 600 },
                ...gallerySx,
              }}
          />
          <Stack
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 1,
                height: 600,
                maxHeight: 600,
              }}
          >
              <Stack sx={{ textAlign: 'left', maxWidth: 460, px: 3 }}>
                  <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Fraunces',
                        fontWeight: 700,
                        mb: 6,
                      }}
                  >
                      {header}
                  </Typography>
                  <Typography
                      color="common.gray2"
                      varaint="h6"
                      sx={{
                        mb: 6,
                        fontWeight: 500,
                        fontFamily: 'Barlow',
                      }}
                  >
                      {description}
                  </Typography>
                  <Box>
                      <Button
                          disableRipple
                          sx={{
                            fontFamily: 'Fraunces',
                            fontWeight: 600,
                            color: 'common.black',
                            textDecoration: `underline solid 3px ${before}`,
                            textDecorationThickness: 6,
                            textUnderlineOffset: 1,
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: `underline solid 3px ${after}`,
                              textDecorationThickness: 6,
                              textUnderlineOffset: 1,
                            },
                          }}
                      >
                          Leran More
                      </Button>
                  </Box>
              </Stack>
          </Stack>
      </Stack>
  );
};

export default About;
