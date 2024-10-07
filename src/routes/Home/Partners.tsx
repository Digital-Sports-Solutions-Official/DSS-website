/* Noah Klein */

import './Partners.css'
import AlternatingMediaText from '../../common_components/AlternatingMediaText';

interface Partner {
    title: string;
    href?: string;
    imgURL: string;
    description: string;
}

const partnerArray: Array<Partner> = [
    {
        title: "The NDA",
        imgURL: 'logos/partners/NDA-logo.jpg',
        href: "https://www.ndadodgeball.com/",
        description: "The National Dodgeball Association is the home of competitive dodgeball in the United States. Specializing in the 8.5in Pinch format, the NDA offers unmatched excitement and showcases the very best the sport has to offer."
    },
    {
        title: "The NCDA",
        imgURL: 'logos/partners/FlameBall-NCDA.png',
        href: "https://ncdadodgeball.com/",
        description: `The National Collegiate Dodgeball Association (NCDA) is the governing body for collegiate dodgeball in the United States. Established in 2005, the NCDA oversees the competitive dodgeball activities of colleges and universities across the nation. Its primary mission is to promote the growth of dodgeball as a collegiate sport by organizing tournaments, fostering sportsmanship, and encouraging team development. \n\nThe NCDA operates under a unique rule set designed specifically for collegiate competition, which emphasizes fast-paced, team-oriented play. Each season culminates in a national championship, where teams from various schools compete for the prestigious title. Beyond the competition, the NCDA strives to create a community of student-athletes, offering a platform for leadership, camaraderie, and personal growth through the sport of dodgeball.\n\nAs the premier organization for collegiate dodgeball, the NCDA continues to expand its influence, providing students with opportunities for both athletic and personal development through their passion for the game.`
    },
]

const Partners = ({ }) => {
    return (
        <div className="Partners">
            <h1>Proudly Partnered</h1>
            <AlternatingMediaText
                entries={partnerArray}
            />
        </div >
    )
}

export default Partners;
