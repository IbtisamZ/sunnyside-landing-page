import { juice } from '../assets/images';
import About from './About/About';

const StandoutCard = () => (
    <About
        image={juice}
        ctaUnderlineColor={{ before: 'hsl(7, 99%, 90%)', after: 'hsl(7, 99%, 70%)' }}
        header="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build
         and extend your brand in digital places."
    />
);

export default StandoutCard;
