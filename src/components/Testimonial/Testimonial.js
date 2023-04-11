import {
  Box,
  Stack,
  Avatar,
  Typography,
} from '@mui/material';
import { emily, thomas, jennie } from '../../assets/images';

const agencyClients = [
  {
    avatar: emily,
    name: 'Emily R.',
    position: 'Marketing Director',
    statement: `We put our trust in Sunnyside and they delivered, 
    making sure our needs were met and deadlines were always hit.`,

  },
  {
    avatar: thomas,
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
    statement: `Sunnyside’s enthusiasm coupled with their keen interest 
    in our brand’s success made it a satisfying and enjoyable experience.`,

  },
  {
    avatar: jennie,
    name: 'Jennie F.',
    position: 'Buisness Owner',
    statement: `Incredible end result! Our sales increased over 400% 
    when we worked with Sunnyside.Highly recommended!`,
  },
];

const Testimonial = () => {
  const testimonials = agencyClients.map(({
    name,
    avatar,
    position,
    statement,
  }) => (
      <Stack
          mx={9}
          mb={7}
          key={name}
          spacing={4}
          maxWidth={300}
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
      >
          <Avatar
              src={avatar}
              sx={{
                width: { sm: 40, md: 60 },
                height: { sm: 40, md: 60 },
              }}
          />
          <Typography
              color="common.gray3"
              sx={{
                fontSize: 13,
                fontFamily: 'Barlow',
                fontWeight: 500,
              }}
          >
              {statement}
          </Typography>
          <Box>
              <Typography sx={{
                fontFamily: 'Fraunces',
                fontWeight: 600,
                mb: 1,
              }}
              >
                  {name}
              </Typography>
              <Typography
                  color="common.gray2"
                  sx={{
                    fontSize: 12,
                    fontFamily: 'Barlow',
                    fontWeight: 500,
                  }}
              >
                  {position}
              </Typography>
          </Box>
      </Stack>
  ));

  return (
      <Stack
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
      >
          {testimonials}
      </Stack>
  );
};

export default Testimonial;
