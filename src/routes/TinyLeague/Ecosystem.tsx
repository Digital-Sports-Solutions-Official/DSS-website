/* Noah Klein */

import AlternatingMediaText, { MediaTextEntry } from '../../common_components/AlternatingMediaText';
import './Ecosystem.css'


const ecosystem: Array<MediaTextEntry> = [
    {
        title: "Hardware",
        imgURL: 'hardware.png',
        href: "https://ncdadodgeball.com/",
        descriptionText: "An innovative suite of IOT enabled modular game units that enable players to build customized scoreboards that fit their needs regardless of their sport."
    },
    {
        title: "Software",
        imgURL: 'software.webp',
        descriptionText: "An all-in-one mobile and web-based application that connects players, coaches, and spectators to live game statistics, updates, and information."
    },
    {
        title: "Database",
        imgURL: 'database.png',
        href: "https://ncdadodgeball.com/",
        descriptionText: "The tinyLeague™ database supports countless integrations between the hardware and software, as well as providing APIs for extensibility across other platforms."
    },
]


const Ecosystem = ({ }) => {
    return (
        <div className="Ecosystem">
            <h1>Our Ecosystem</h1>
            <AlternatingMediaText entries={ecosystem} />
        </div>
    )
}

export default Ecosystem;
