/* Noah Klein */

import { CSSProperties } from "react";

interface ContactButtonProps {
    href: string;
}

const anchorStyle: CSSProperties = {
    padding: '0 1rem',
    textDecoration: 'none',
    lineHeight: '6rem',
    borderRadius: '2rem',
    outline: '3px solid var(--dss-gray)',
    justifyContent: 'center',
}

const textStyle: CSSProperties = {
    textDecoration: 'none',
    margin: 'auto',
}

const ContactButton = ({ href }: ContactButtonProps) => {
    return (
        <a href={href} style={anchorStyle}>
            <h2 style={textStyle}>(this needs changed lol) Join the Court Sport revolution!</h2>
        </a>
    );
}

export default ContactButton;