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
            <>
                <p>Introducing an innovative suite of IoT-enabled modular game units, designed to empower players and teams to build fully customized scoreboards tailored to their specific needs, no matter the sport. These cutting-edge units offer seamless integration, allowing for real-time data capture and display, ensuring that every game runs smoothly and efficiently.</p>
                <p>Whether you're tracking scores, time, or player stats, these modular units provide unmatched flexibility and adaptability. Their IoT capabilities ensure easy connectivity and control, making it simple to set up and manage personalized scoreboards for any sport, from dodgeball to basketball and beyond. </p>
            </>
    },
    {
        title: "Software",
        imgElement: <MdDevices size={'10rem'} color='white' />,
        descriptionElement:
            <>
                <p>Experience the future of sports league management with tinyLeague™, an all-in-one mobile and web-based application that seamlessly connects players, coaches, and spectators. This powerful platform provides real-time access to live game statistics, updates, and essential information, keeping everyone engaged and informed.</p>
                <p>With its user-friendly interface and advanced features, tinyLeague™ streamlines league operations, making scheduling, roster management, and communication easier than ever. Whether you're tracking scores, reviewing player stats, or following live game updates, this app ensures a fully integrated and immersive experience for the entire sports community, from the court to the stands.</p>
            </>

    },
    {
        title: "Database",
        imgElement: <FaDatabase size={'10rem'} color='white' />,
        descriptionElement:
            <>
                <p>The tinyLeague™ database is the backbone of seamless sports league operations, designed to support countless integrations between hardware and software components. This powerful, scalable system not only stores comprehensive data about leagues but also offers a suite of advanced features like automated streaming overlays, player rankings, and real-time team and player standings.</p>
                <p>With robust APIs for extensibility, tinyLeague™ allows effortless integration with third-party platforms, providing endless possibilities for customization and expansion. Whether you're building custom dashboards or enhancing live broadcasts with real-time data, tinyLeague™ ensures a smooth, flexible, and efficient experience across all aspects of league management.</p>
            </>
    },
]


const Ecosystem = () => {
    return (
        <div className="Ecosystem">
            <h1>Our Ecosystem</h1>
            <AlternatingMediaText entries={ecosystem} />
        </div>
    )
}

export default Ecosystem;
