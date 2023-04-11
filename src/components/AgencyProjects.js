import { Box } from '@mui/material';
import {
  cone,
  milk,
  sugar,
  orangeOnPlate,
} from '../assets/images';

const AgencyProjects = () => {
  const images = [
    {
      id: 1,
      image: milk,
    },
    {
      id: 2,
      image: orangeOnPlate,
    },
    {
      id: 3,
      image: cone,
    },
    {
      id: 4,
      image: sugar,
    },
  ];

  const displayImages = images.map(({ image, id }) => (
      <Box key={id}>
          <img
              src={image}
              alt="not-found"
              style={{
                width: '100%',
                height: '100%',
              }}
          />
      </Box>
  ));

  return (
      <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
      >
          {displayImages}
      </Box>
  );
};

export default AgencyProjects;
