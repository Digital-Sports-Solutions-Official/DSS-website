/* Noah Klein */
import React, { useEffect, useState } from 'react';
import './Timeline2.css';

interface Event {
    date: string;
    description: string;
}

interface TimelineProps {
    events: Event[];
}


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

const events = [
    { date: '2022-01-01', description: 'Event 1 Description' },
    { date: '2022-02-01', description: 'Event 2 Description' },
    { date: '2022-03-01', description: 'Event 3 Description' },
    { date: '2022-04-01', description: 'Event 4 Description' },
];

const Timeline2 = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setAnimate(true);
    }, []);


    return (
        <div className="Timeline">
            <div className="column">
                {events.map((event, index) => (
                    <div className={`row entry${index % 2 == 0 ? ' even' : ''}`}>
                        <div className='date-box'>
                            {event.date}
                        </div>

                        <div className="bubble-line" />

                        <div className="event-box">
                            <div className='event'>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};
export default Timeline2;