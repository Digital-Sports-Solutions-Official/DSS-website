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
    { title: "The NDA", imgURL: 'NDA-logo.jpg', href: "https://www.ndadodgeball.com/", description: "The National Dodgeball Association is the home of competitive dodgeball in the United States. Specializing in the 8.5in Pinch format, the NDA offers unmatched excitement and showcases the very best the sport has to offer." },
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
