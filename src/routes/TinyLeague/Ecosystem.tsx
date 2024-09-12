/* Noah Klein */

import AlternatingMediaText, { MediaTextEntry } from '../../common_components/AlternatingMediaText';
import './Ecosystem.css'


const ecosystem: Array<MediaTextEntry> = [
    { title: "Hardware", imgURL: 'hardware.png', href: "https://ncdadodgeball.com/", description: "Fringilla nunc suscipit augue facilisi tellus aliquet ipsum. Dui porta elementum class natoque platea nam curae id malesuada. Vitae auctor venenatis felis a at auctor. Neque sem euismod posuere nullam tempus vitae aenean nostra. Vel suspendisse class nulla vivamus quam consectetur semper. Auctor est aliquet magna ultrices tellus vel lacus ex feugiat. Ad penatibus amet suspendisse dapibus mollis sociosqu. Porttitor a pulvinar penatibus habitasse mi ultricies ex." },
    { title: "Software", imgURL: 'software.webp', description: "[NO HREF SPECIFIED ON THIS ONE, SO NO LINK!]----------------------Mi aliquam ipsum aliquet neque class faucibus ligula. Hac interdum eget tristique blandit nunc aliquet in phasellus. Class ornare nullam congue metus praesent cubilia ridiculus rutrum. Quis porttitor facilisi habitasse adipiscing eu aliquam. Magna enim parturient sit arcu dictum magna feugiat mollis orci? Blandit potenti posuere vehicula; vestibulum habitant penatibus scelerisque. Sollicitudin turpis dictum odio efficitur blandit. Donec inceptos risus sodales sagittis sollicitudin per." },
    { title: "Database", imgURL: 'database.png', href: "https://ncdadodgeball.com/", description: "[HEY CHECK OUT MY IMAGE'S HREF!]-----------------------Lorem ipsum odor amet, consectetuer adipiscing elit. Duis nisi netus aptent augue facilisis sociosqu himenaeos turpis. Habitasse convallis ipsum morbi metus massa cursus. Ataciti scelerisque sapien pretium scelerisque erat fermentum congue. Montes curabitur commodo at orci morbi. Posuere adipiscing dui vestibulum; per cras augue arcu?" },
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
