import { Stack } from '@mui/material';
import { cherries, orange } from '../assets/images';
import Gallery from './Gallery/Gallery';

const services = [
  {
    image: cherries,
    text: 'Graphic Design',
    description: `Great design makes you memorable. We deliver artwork that underscores your
   brand message and captures potential clients’ attention.`,
  },
  {
    image: orange,
    text: 'Photography',
    description: `Increase your credibility by getting the most stunning, high-quality 
    photos that improve your business image.`,
  },
];

const AgencyServices = () => {
  const servicesCard = services.map(({ image, text, description }) => (
      <Gallery
          withText
          text={text}
          image={image}
          description={description}
          gallerySx={{
            height: 650,
            maxHeight: 650,
            backgroundPosition: 'top center',
          }}
      />
  ));

  return (
      <Stack sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      >
          {servicesCard}
      </Stack>
  );
};

export default AgencyServices;
