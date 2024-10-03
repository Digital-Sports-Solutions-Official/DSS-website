/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import PreOrder from './PreOrder';

const Order = () => {
    return (
        <div className="Order">
            <NavBar />
            <PreOrder />
            <Footer />
        </div>
    );
};

export default Order;
