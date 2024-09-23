/* Noah Klein */

import AlternatingMediaText, { MediaTextEntry } from '../../common_components/AlternatingMediaText';
import './Ecosystem.css'


const ecosystem: Array<MediaTextEntry> = [
    { title: "Hardware", imgURL: 'hardware.png', href: "https://ncdadodgeball.com/", description: "An innovative suite of modular game units that enable players to build customized scoreboards that perfectly fit their sports needs." },
    { title: "Software", imgURL: 'software.webp', description: "An all-in-one mobile and web-based application that connects players, coaches, and spectators to live game statics and updates." },
    { title: "Database", imgURL: 'database.png', href: "https://ncdadodgeball.com/", description: "The backbone of Digital Sports Solutions enables integration between the hardware, software, and 3rd party apps." },
]


const Ecosystem = ({ }) => {
    return (
        <div className="Ecosystem">
            <h1>The tinyLeague ecosystem</h1>
            <AlternatingMediaText entries={ecosystem} />
        </div>
    )
}

export default Ecosystem;
