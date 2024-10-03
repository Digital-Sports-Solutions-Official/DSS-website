/* Noah Klein */

import { InstagramEmbed } from "react-social-media-embed/dist/components/embeds/InstagramEmbed";

interface Event {
    date: string;
    title: string;
    description: string;
    embed?: JSX.Element;
}

export const events: Array<Event> = [
    {
        date: 'Oct. 2022',
        title: 'The Beginning',
        description: 'The Digital Shotclock concept is conceived',
    },
    {
        date: 'April 2023',
        title: 'Prototype Demo',
        description: 'Shotclock prototype demoed at 2023 NCDA Nationals at Ohio University',
    },
    {
        date: 'May 2023',
        title: 'DSS',
        description: 'Digital Sports Solutions LLC is founded',
    },
    {
        date: 'June - November 2023',
        title: 'V2 Demo',
        description: 'Shotclock and Gameclock box (Generation 2) demoed at various NDA/NCDA events',
    },
    {
        date: 'December 2023',
        title: 'Web App',
        description: 'Web Application concept is conceived',
    },
    {
        date: 'April 2024',
        title: 'NCDA Nationals Demo',
        description: 'Generation 2 Game Manager Box and Web Application demoed at 2024 NCDA Nationals.',
        embed: <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
        </div>,
    },
    {
        date: 'May 2024',
        title: 'Now',
        description: 'Total ecosystem begins development',
    },
];
