/* Noah Klein */

import AlternatingMediaText, { MediaTextEntry } from '../../common_components/AlternatingMediaText';

import { IoHardwareChip } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

import './Ecosystem.css'


const ecosystem: Array<MediaTextEntry> = [
    {
        title: "Hardware",
        imgElement: <IoHardwareChip size={'10rem'} color='white' />,
        descriptionElement:
            <p>An innovative suite of IOT enabled modular game units that enable players to build customized scoreboards that fit their needs regardless of their sport.</p>
    },
    {
        title: "Software",
        imgElement: <MdDevices size={'10rem'} color='white' />,
        descriptionElement:
            <p>An all-in-one mobile and web-based application that connects players, coaches, and spectators to live game statistics, updates, and information.</p>
    },
    {
        title: "Database",
        imgElement: <FaDatabase size={'10rem'} color='white' />,
        descriptionElement:
            <p>The tinyLeague™ database supports countless integrations between the hardware and software, as well as providing APIs for extensibility across other platforms.</p>
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
