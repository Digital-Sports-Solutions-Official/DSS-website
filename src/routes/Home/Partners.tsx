/* Noah Klein */

import './Partners.css'

interface Partner {
    name: string;
    description: string;
    logoUrl: string;
}

const partnerArray: Array<Partner> = [
    { name: "NDA", description: "the NDA", logoUrl: 'NDA-logo.jpg' },
    { name: "NDA", description: "the NDA", logoUrl: 'NDA-logo.jpg' },
    { name: "NDA", description: "the NDA", logoUrl: 'NDA-logo.jpg' }
]

const Partners = ({ }) => {
    return (
        <div className="Partners">
            <h1>Partners</h1>
            <div className='column'>
                {Array.from(partnerArray.entries()).map(([key, partner]) => (
                    <div className='row'>
                        <a href={partner.name}>
                            {key}
                        </a>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Partners;