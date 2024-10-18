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
        <>
            <nav className={'NavBar'}>
                <div className='anchors'>
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
                <a className='logo-anchor' href='/'>
                    <img src='logos/DSS_CombinationMark_FullColor.svg' alt="DSS Logo" draggable='false' />
                </a>
            </nav>
            <div className='NavBar-placeholder' />
        </>
    );
};

export default NavBar;
