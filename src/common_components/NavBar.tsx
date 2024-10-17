/* Noah Klein */

import './NavBar.css';

const navBarMap: Map<string, string> = new Map([
    ['Home', '/'],
    ['tinyLeague', '/tinyLeague'],
    ['Order', '/order'],
    ['About', '/about'],
]);

const NavBar = () => {
    const currentPath = window.location.pathname; // Get the current URL path

    return (
        <nav className={'NavBar'}>
            <div className='row a-holder'>
                {Array.from(navBarMap.entries()).map(([anchorText, href]) => (
                    <a
                        href={href}
                        className={currentPath === `${href}` ? 'active' : ''} // Add 'active' class if the path matches
                        key={href}
                    >
                        {anchorText}
                    </a>
                ))}
            </div>
            {/* TODO Make this a link to home */}
            <img src='logos/DSS_CombinationMark_FullColor.svg' alt="DSS Logo" draggable='false' />
        </nav>
    );
};

export default NavBar;
