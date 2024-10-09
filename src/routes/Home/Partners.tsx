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
        imgURL: 'logos/partners/NDA-logo.png', // Get a transparent NDA logo
        href: "https://www.ndadodgeball.com/",
        description: "The National Dodgeball Association (NDA) is a leading organization dedicated to promoting and governing the sport of dodgeball across the United States. Established with the goal of advancing dodgeball as a recognized and respected sport, the NDA organizes competitive leagues, tournaments, and events for players of all skill levels.\n\nThe NDA provides a structured environment for both recreational and professional players, ensuring consistent rules and fair play.It fosters a sense of community among dodgeball enthusiasts and emphasizes sportsmanship, teamwork, and physical fitness.Through its efforts, the NDA aims to grow the sport's popularity, create opportunities for player development, and establish dodgeball as a mainstream athletic pursuit.\n\nWith a focus on expanding dodgeball's reach and impact, the NDA continues to enhance the sport's visibility and engage with a broad audience, from grassroots players to elite competitors."
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
