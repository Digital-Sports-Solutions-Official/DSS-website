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
            { threshold: 0.6 } // Trigger when 60% of the element is visible
        );

        const currentEventRefs = eventRefs.current;

        currentEventRefs.forEach((event) => {
            if (event) {
                observer.observe(event);
            }
        });

        return () => {
            currentEventRefs.forEach((event) => {
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

                    <img className="indicator" src="logos/DSS_LogoMark_FullColor.svg" />

                    <div
                        ref={(el) => (eventRefs.current[index] = el)}
                        className="event-rails"
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
            <img src="logos\tLMark_White.svg" className="cap" draggable="false" />
            <p className="debut">The DSS Team will debut tinyLeague in 2025</p>
        </div >
    );
};

export default Timeline;
