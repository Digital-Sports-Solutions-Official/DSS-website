/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import Timeline from './Timeline';

const events = [
    { date: '2022-01-01', description: 'Event 1 Description' },
    { date: '2022-02-01', description: 'Event 2 Description' },
    { date: '2022-03-01', description: 'Event 3 Description' },
    { date: '2022-04-01', description: 'Event 4 Description' },
];


const About = () => {
    return (
        <div className="About">
            <NavBar />
            <Timeline events={events} />
            <Footer />
        </div>
    );
};

export default About;
