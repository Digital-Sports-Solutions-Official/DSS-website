import { useState, useEffect, useRef } from 'react';
import './Timeline2.css';

interface Event {
    date: string;
    title: string;
    description: string;
}

const events: Array<Event> = [
    {
        date: 'Oct. 2022',
        title: 'The Beginning',
        description: 'The Digital Shotclock concept is conceived'
    },
    {
        date: 'April 2023',
        title: 'Prototype Demo',
        description: 'Shotclock prototype demoed at 2023 NCDA Nationals at Ohio University'
    },
    {
        date: 'May 2023',
        title: 'DSS',
        description: 'Digital Sports Solutions LLC is founded'
    },
    {
        date: 'June - November 2023',
        title: 'V2 Demo',
        description: 'Shotclock and Gameclock box (Generation 2) demoed at various NDA/NCDA events'
    },
    {
        date: 'December 2023',
        title: 'Web App',
        description: 'Web Application concept is conceived'
    },
    {
        date: 'April 2024',
        title: 'NCDA Nationals Demo',
        description: 'Generation 2 Game Manager Box and Web Application demoed at 2024 NCDA Nationals.'
    },
    {
        date: 'May 2024',
        title: 'Now',
        description: 'Total ecosystem begins development'
    },
];

const Timeline2 = () => {
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

export default Timeline2;
