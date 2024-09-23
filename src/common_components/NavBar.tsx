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
            <img src='/DSS_CombinationMark_FullColor.svg' alt="DSS Logo" />
            {Array.from(navBarMap.entries()).map(([anchorText, href]) => (
                <a
                    href={href}
                    className={currentPath === `${href}` ? 'active' : ''} // Add 'active' class if the path matches
                    key={href}
                >
                    {anchorText}
                </a>
            ))}
        </nav>
    );
};

export default NavBar;
