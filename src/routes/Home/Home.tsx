/* Noah Klein */

import Landing from './Landing';
import Partners from './Partners';
import ProductCarousel from './ProductCarousel';

const Home = () => {
    return (
        <div className="Home">
            <Landing />
            <ProductCarousel />
            <Partners />
        </div>
    );
};

export default Home;
