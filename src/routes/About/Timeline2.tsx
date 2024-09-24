/* Noah Klein */
import { useEffect } from 'react';
import './Timeline2.css';

const events = [
    { date: '2022-01-01', description: 'Event 1 Description' },
    { date: '2022-02-01', description: 'Event 2 Description' },
    { date: '2022-03-01', description: 'Event 3 Description' },
    { date: '2022-04-01', description: 'Event 4 Description' },
];

const Timeline2 = () => {
    // const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        // setAnimate(true);
    }, []);


    return (
        <div className="Timeline">
            <div className="column">
                {events.map((event, index) => (
                    <div className={`row entry${index % 2 == 0 ? ' even' : ''}`}>
                        <div className='date-box'>
                            {event.date}
                        </div>

                        <div className="bubble-line" style={{ backgroundPositionY: `${100 * index}px` }} >
                            <img src='/DSS_LogoMark_White.svg' />
                        </div>

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