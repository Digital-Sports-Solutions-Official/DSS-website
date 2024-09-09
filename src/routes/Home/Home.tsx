/* Noah Klein */

import NavBar from './NavBar';
import AboutUs from './Sections/AboutUs';
import Footer from './Sections/Footer';

import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <NavBar />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;
