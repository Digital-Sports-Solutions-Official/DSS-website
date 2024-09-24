/* Noah Klein */
import { useState, useEffect } from 'react';
import './Timeline2.css';

const events = [
    { date: '2022-01-01', description: 'Event 1 Description' },
    { date: '2022-02-01', description: 'Event 2 Description' },
    { date: '2022-03-01', description: 'Event 3 Description' },
    { date: '2022-04-01', description: 'Event 4 Description' },
];

const Timeline2 = () => {
    const [animate, setAnimate] = useState<boolean>(false);
    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        // Trigger animation on mount
        setAnimate(true);
    }, []);

    const handleEventClick = (index: number) => {
        setSelected(index);
    }

    return (
        <div className="Timeline column">
            {events.map((event, index) => (
                <div className={`row entry${index % 2 == 0 ? ' even' : ' odd'}${index == selected ? ' selected' : ''}`}>

                    <div className='date-box'>
                        {event.date}
                    </div>

                    <img className="indicator" src='/DSS_LogoMark_FullColor.svg' />

                    <div className={`event-box${animate ? ' slide-in' : ''}`} onClick={() => handleEventClick(index)}>
                        <div className='event'>
                            <p>{event.description}</p>
                        </div>
                    </div>

                </div>
            ))}
            <div className='line' />
        </div >
    );
};
export default Timeline2;