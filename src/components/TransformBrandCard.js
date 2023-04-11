import { egg } from '../assets/images';
import About from './About/About';

const TransformBrandCard = () => (
    <About
        image={egg}
        ctaUnderlineColor={{ before: 'hsl(51, 100%, 84%)', after: 'hsl(51, 100%, 49%)' }}
        header="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you."
        gallerySx={{ order: { xs: -1, md: 1 } }}
    />
);

export default TransformBrandCard;
