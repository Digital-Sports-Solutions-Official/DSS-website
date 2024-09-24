/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import Timeline from './Timeline';
import Timeline2 from './Timeline2';

const About = () => {
    return (
        <div className="About">
            <NavBar />
            <Timeline />
            <Timeline2 />
            <Footer />
        </div>
    );
};

export default About;
