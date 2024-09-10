/* Noah Klein */

import NavBar from '../../common_components/NavBar';
import Footer from '../../common_components/Footer';
import CLKRLanding from './CLKRLanding';
import Ecosystem from './Ecosystem';

const CLKR = () => {
    return (
        <div className="CLKR">
            <NavBar />
            <CLKRLanding />
            <Ecosystem />
            <Footer />
        </div>
    );
};

export default CLKR;
