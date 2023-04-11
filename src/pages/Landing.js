import { Box } from '@mui/material';
import AgencyProjects from '../components/AgencyProjects';
import AgencyServices from '../components/AgencyServices';
import ClientTestimonial from '../components/ClientTestimonial';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import StandoutCard from '../components/StandoutCard';
import TransformBrandCard from '../components/TransformBrandCard';

const Landing = () => (
    <Box sx={{
      width: 1,
      maxWidth: 1800,
      mx: 'auto',
      overflow: 'hidden',
    }}
    >
        <Hero />
        <TransformBrandCard />
        <StandoutCard />
        <AgencyServices />
        <ClientTestimonial />
        <AgencyProjects />
        <Footer />
    </Box>
);

export default Landing;
