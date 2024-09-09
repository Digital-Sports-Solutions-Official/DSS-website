/* Noah Klein */

import './NavBar.css';

interface NavBarProps {

}


const navBarMap: Map<string, string> = new Map([
    ['Home', ' /'],
    ['CLKR', 'clkr'],
    ['Order', 'order'],
    ['About', 'about'],
]);


const NavBar = ({ }: NavBarProps) => {
    //TODO do something fun in the navbar, maybe a css glow under mouse, maybe make the DSS logo spin when you hover over it
    return (
        <nav className={'NavBar'}>
            <img src='src\assets\DSS-logo-transparent.png' style={{ height: '75%' }} />
            {Array.from(navBarMap.entries()).map(([anchorText, href]) => (
                <a href={href}>
                    {anchorText}
                </a>
            ))}
        </nav>
    );
};

export default NavBar;
