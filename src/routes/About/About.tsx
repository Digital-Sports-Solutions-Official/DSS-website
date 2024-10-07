/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import Timeline from './Timeline';
import Team from './Team';

const About = () => {
    return (
        <div className="About">
            <NavBar />
            <Timeline />
            <Team />
            <Footer />
        </div>
    );
};

export default About;
