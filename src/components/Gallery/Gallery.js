import { Box, Typography } from '@mui/material';

const Gallery = (props) => {
  const {
    text = '',
    image = '',
    description = '',
    gallerySx = { },
    withText = false,
  } = props;

  const isGraphicDesign = 'Graphic Design';

  const renderGallery = () => {
    if (withText) {
      return (
          <Box
              sx={{
                width: 1,
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                ...gallerySx,
              }}
          >
              <Box sx={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                height: 1,
                pb: 10,
              }}
              >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 330,
                  }}
                  >
                      <Box mb={3}>
                          <Typography
                              variant="h5"
                              color={isGraphicDesign ? 'common.darkDesaturatedCyan' : 'common.darkBlue'}
                              sx={{ fontFamily: 'Fraunces', fontWeight: 700 }}
                          >
                              {text}
                          </Typography>
                      </Box>
                      <Box>
                          <Typography
                              color="common.gray3"
                              sx={{
                                fontFamily: 'Barlow',
                                fontWeight: 500,
                                fontSize: 14,
                                textAlign: 'center',
                              }}
                          >
                              {description}
                          </Typography>
                      </Box>
                  </Box>
              </Box>
          </Box>
      );
    }

    return (
        <Box
            sx={{
              width: 1,
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              ...gallerySx,
            }}
        />
    );
  };

  return renderGallery();
};

export default Gallery;
