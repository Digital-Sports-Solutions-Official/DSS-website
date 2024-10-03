/* Noah Klein */

import { useState, useEffect, useRef } from 'react';
import { events } from './Events'
import './Timeline.css';


const Timeline = () => {
    const [selected, setSelected] = useState<number>(-1);
    const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = eventRefs.current.indexOf(entry.target as HTMLDivElement);

                    if (entry.isIntersecting && index !== -1) {
                        // Update the selected index when the entry comes into view
                        setSelected(index);
                        entry.target.classList.add('slide-in');
                    }
                });
            },
            { threshold: 1 } // Trigger when 100% of the element is visible
        );

        eventRefs.current.forEach((event) => {
            if (event) {
                observer.observe(event);
            }
        });

        return () => {
            eventRefs.current.forEach((event) => {
                if (event) {
                    observer.unobserve(event);
                }
            });
        };
    }, []);

    // TODO implement embedded media in the timeline events

    return (
        <div className="Timeline column">
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`row entry${index % 2 === 0 ? ' even' : ' odd'}${index === selected ? ' selected' : ''}`}
                >
                    <div className="date-box">
                        {event.date}
                    </div>

                    <img className="indicator" src="/DSS_LogoMark_FullColor.svg" />

                    <div
                        ref={(el) => (eventRefs.current[index] = el)}
                        className={`event-box`}
                    >
                        <div className="event column">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="line" />
        </div>
    );
};

export default Timeline;
