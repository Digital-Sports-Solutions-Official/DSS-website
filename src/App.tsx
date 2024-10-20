/* Noah Klein */

import { Outlet } from 'react-router-dom';
import NavBar from './common_components/NavBar';
import Footer from './common_components/Footer';


// TODO add a loading spinner
// TODO standardize heading gaps on all pages

const App = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
