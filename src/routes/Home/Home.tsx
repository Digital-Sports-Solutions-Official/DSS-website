/* Noah Klein */

import './Home.css';
import NavBar from '../NavBar';
import Footer from '../../components/Footer';
import Landing from './Landing';
import Partners from './Partners';
import ProductCarousel from './ProductCarousel';
import ContactButton from '../../components/ContactButton';

const Home = () => {
    return (
        <div className="Home">
            <NavBar />
            <Landing />
            <Partners />
            <ProductCarousel />
            {/* //TODO I don't even think this should be a button */}
            <ContactButton href="apple.com" />
            <Footer />
        </div>
    );
};

export default Home;
