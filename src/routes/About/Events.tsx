/* Noah Klein */

import { InstagramEmbed } from "react-social-media-embed/dist/components/embeds/InstagramEmbed";
import { YouTubeEmbed } from "react-social-media-embed/dist/components/embeds/YouTubeEmbed";

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
        embed:
            <div className="embed-container-insta">
                <InstagramEmbed url="https://www.instagram.com/p/CkgrDwWAp-5/" />  {/*width={"75%"}*/}
            </div>,
    },
    {
        date: 'April 2023',
        title: 'Prototype Demo',
        description: 'Shotclock prototype demoed at 2023 NCDA Nationals at Ohio University',
        embed:
            <div className="embed-container-youtube">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=84cbX2pEHPM" />
            </div>,
    },
    {
        date: 'May 2023',
        title: 'DSS',
        description: 'Digital Sports Solutions LLC is founded',
        embed: <img src="logos/Old_DSS_logo.png" />
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
        embed:
            <div className="embed-container-insta">
                <InstagramEmbed url="https://www.instagram.com/p/C5qUbMcgfZ2/" />
            </div>,

    },
];
