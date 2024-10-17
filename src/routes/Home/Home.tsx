/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import Landing from './Landing';
import Partners from './Partners';
import ProductCarousel from './ProductCarousel';
//import ContactButton from '../../common_components/ContactButton';

const Home = () => {
    // TODO maybe make the scrollbar look nicer
    return (
        <div className="Home">
            <NavBar />
            <Landing />
            <ProductCarousel />
            <Partners />
            <Footer />
        </div>
    );
};

export default Home;
