/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import Timeline from './Timeline';

const About = () => {
    return (
        <div className="About">
            <NavBar />
            <Timeline />
            {/* TODO Add an an about section for the three boys */}
            <Footer />
        </div>
    );
};

export default About;
