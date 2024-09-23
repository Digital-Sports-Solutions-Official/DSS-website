/* Noah Klein */

import './Timeline.css';
import { Chrono } from 'react-chrono';


const items = [
    {
        title: "Oct. 2022",
        cardTitle: "The idea",
        cardDetailedText: "Digital Sports Solutions began when Adam and Andrew were on the way home from playing in a National Collegiate Dodgeball Association (NCDA) tournament. They both recognized an opportunity to innovate on the NCDA’s manual shotclocking system by using their extensive engineering backgrounds to develop a more automated solution.",
        media: {
            type: "IMAGE",
            source: {
                url: "/timeline-pic.jpg"
            }
        }
    },
    {
        title: "Oct. 2022",
        cardTitle: "The NCDA",
        cardDetailedText: "The NCDA is a nonprofit dodgeball league for college students specializing in the 8.5in pinch format. In dodgeball 2 teams go head-to-head with the goal of eliminating their opponent, similar to basketball there is a shotclock to keep the game moving. But unlike basketball each team has its own clock running asynchronously, each managed by a referee nicknamed shotclocker who is manually counting. Obviously, this creates issues because no two people count at the same pace meaning one side might be throwing more or less than the other. Furthermore, dodgeball is a high-intensity sport and a shotclocker might forget the count whenever the game gets chaotic. This is what inspired the creation of digital computer-controlled shotclocks to make the shotclockers job easier and less stressful.",
        media: {
            type: "IMAGE",
            source: {
                url: "/timeline-pic.jpg"
            }
        }
    },
];

const Timeline = () => {
    return (
        <div style={{ width: '100%' }}>
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                allowDynamicUpdate={true}
                disableToolbar={true}
                classNames={{
                    card: 'my-card',
                    cardMedia: 'my-card-media',
                    cardSubTitle: 'my-card-subtitle',
                    cardText: 'my-card-text',
                    cardTitle: 'my-card-title',
                    controls: 'my-controls',
                    title: 'my-title',
                }}
                theme={{
                    primary: 'var(--dss-gray)',
                    secondary: 'var(--dss-gray)',
                    cardBgColor: 'white',
                    titleColor: 'var(--dss-gray)',
                    titleColorActive: 'var(--dss-red)',
                }}
            />
        </div>
    );
};

export default Timeline;
