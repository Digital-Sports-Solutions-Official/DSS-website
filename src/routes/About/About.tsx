/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import Timeline from './Timeline';
import Teams from './Team';

const About = () => {
    return (
        <div className="About">
            <NavBar />
            <Timeline />
            <Teams />
            <Footer />
        </div>
    );
};

export default About;
