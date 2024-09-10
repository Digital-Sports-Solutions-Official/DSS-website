/* Noah Klein */

import './Home.css';
import NavBar from '../NavBar';
import Footer from '../../components/Footer';
import Landing from './Landing';
import Partners from './Partners';
import ProductCarousel from './ProductCarousel';

const Home = () => {
    return (
        <div className="Home">
            <NavBar />
            <Landing />
            <Partners />
            <ProductCarousel />
            <Footer />
        </div>
    );
};

export default Home;
