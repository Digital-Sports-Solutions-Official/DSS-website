/* Noah Klein */

import { Outlet } from 'react-router-dom';
import NavBar from './common_components/NavBar';
import Footer from './common_components/Footer';

const App = () => {
    return (
        <div id="root">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
