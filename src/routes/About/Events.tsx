/* Noah Klein */

import { InstagramEmbed } from "react-social-media-embed/dist/components/embeds/InstagramEmbed";
import { YouTubeEmbed } from "react-social-media-embed/dist/components/embeds/YouTubeEmbed";

interface Event {
    date: string;
    title: string;
    description: string;
    embed?: JSX.Element;
}

// TODO update timeline events

export const events: Array<Event> = [
    {
        date: 'Oct. 2022',
        title: 'The Beginning',
        description: 'Adam & Andrew were on their way home from the Akron Pinkout Tournament, when they first came up with the idea for a digital shotclock for the NCDA. Wanting to improve the experience of players and referees, they identified that a digital shotclock would improve the visibility of the clock and the integrity of the game.',
        embed:
            <div className="embed-container-insta">
                <InstagramEmbed url="https://www.instagram.com/p/CkgrDwWAp-5/" />  {/*width={"75%"}*/}
            </div>,
    },
    {
        date: 'April 2023',
        title: '2023 NCDA Nationals Demo',
        description: 'Shotclock prototype demoed at 2023 NCDA Nationals at Ohio University.',
        embed:
            <div className="embed-container-youtube">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=84cbX2pEHPM" />
            </div>,
    },
    {
        date: 'May 2023',
        title: 'DSS Founded',
        description: 'Digital Sports Solutions LLC is founded in the state of Ohio.',
        embed: <img src="logos/Old_DSS_logo.png" />
    },
    {
        date: 'June - November 2023',
        title: 'Additional Testing & Development',
        description: 'Over the following few months, Adam worked to further build out the digital shotclocking project. Through his testing and development, Adam began to add on multiple features to the system as feedback was received from teams.',
    },
    {
        date: 'December 2023',
        title: 'Web App',
        description: 'At the beginning of the development phase, Michael joined the team to spearhead the creation of a web application and user-friendly interface. His goal was to transform DSS\'s existing hardware-based systems into a streamlined digital solution. By leveraging modern web technologies, Michael focused on enhancing the accessibility and functionality of the platform, ensuring that users could efficiently manage sports data and league operations online. The project evolved from a basic hardware solution into a comprehensive digital tool, designed to handle everything from team management and scheduling to real- time game statistics and performance analytics. The transition to this innovative approach not only improved the ease of use for clients but also positioned DSS as a leader in sports data management, offering a platform that integrates seamlessly with their hardware while expanding its capabilities.',
    },
    {
        date: 'April 2024',
        title: '2024 NCDA Nationals Demo',
        description: 'Following up on their previous success, the DSS team demoed their second prototype at NCDA Nationals 2024 hosted at The Ohio State University. This test expanded upon last year\'s by including the hardware improvements and newly created web app. This test highlighted the additional functionality that an expanded ecosystem could provide, along with making match results more accessible to players and fans.',
        embed:
            <div className="embed-container-insta">
                <InstagramEmbed url="https://www.instagram.com/p/C5qUbMcgfZ2/" />
            </div>,

    },
];
