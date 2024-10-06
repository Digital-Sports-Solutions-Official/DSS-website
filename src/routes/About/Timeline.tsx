/* Noah Klein */

import { useState, useEffect, useRef } from 'react';
import { events } from './Events'
import './Timeline.css';


const Timeline = () => {
    const [selected, setSelected] = useState<number>(-1);
    const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

    /* This effect updates selected based on the div most recently scrolled into view */
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
            { threshold: 0.75 } // Trigger when 75% of the element is visible
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
                        className={`event-rails`}
                    >
                        <div className="event column">
                            <span className="mobile-date">{event.date}</span>
                            <h3>{event.title}</h3>
                            {event.embed && event.embed}
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
