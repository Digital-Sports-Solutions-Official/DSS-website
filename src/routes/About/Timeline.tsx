/* Noah Klein */

import React, { useEffect, useState } from 'react';
import './Timeline.css';

interface Event {
    date: string;
    description: string;
}

interface TimelineProps {
    events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setAnimate(true);
    }, []);

    return (
        <div className="Timeline">
            <div className="column">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-event ${animate ? 'slide-in' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="event-bubble"></div>
                        <div className="event-content">
                            <h3>{event.date}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-arrow"></div>
        </div>
    );
};

export default Timeline;
