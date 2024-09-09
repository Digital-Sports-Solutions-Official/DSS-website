/* Noah Klein */

import './Partners.css'

interface Partner {
    name: string;
    logoUrl: string;
    description: string;
}

const partnerArray: Array<Partner> = [
    { name: "NDA", logoUrl: 'NDA-logo.jpg', description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis nisi netus aptent augue facilisis sociosqu himenaeos turpis. Habitasse convallis ipsum morbi metus massa cursus. Ataciti scelerisque sapien pretium scelerisque erat fermentum congue. Montes curabitur commodo at orci morbi. Posuere adipiscing dui vestibulum; per cras augue arcu?" },
    { name: "NDA", logoUrl: 'NDA-logo.jpg', description: "Mi aliquam ipsum aliquet neque class faucibus ligula. Hac interdum eget tristique blandit nunc aliquet in phasellus. Class ornare nullam congue metus praesent cubilia ridiculus rutrum. Quis porttitor facilisi habitasse adipiscing eu aliquam. Magna enim parturient sit arcu dictum magna feugiat mollis orci? Blandit potenti posuere vehicula; vestibulum habitant penatibus scelerisque. Sollicitudin turpis dictum odio efficitur blandit. Donec inceptos risus sodales sagittis sollicitudin per." },
    { name: "NDA", logoUrl: 'NDA-logo.jpg', description: "Fringilla nunc suscipit augue facilisi tellus aliquet ipsum. Dui porta elementum class natoque platea nam curae id malesuada. Vitae auctor venenatis felis a at auctor. Neque sem euismod posuere nullam tempus vitae aenean nostra. Vel suspendisse class nulla vivamus quam consectetur semper. Auctor est aliquet magna ultrices tellus vel lacus ex feugiat. Ad penatibus amet suspendisse dapibus mollis sociosqu. Porttitor a pulvinar penatibus habitasse mi ultricies ex." }
]

const Partners = ({ }) => {
    const isEven = (x: number): boolean => {
        return (x % 2) === 0;
    }

    return (
        <div className="Partners">
            <h1>Partners</h1>
            <div className='column'>
                {Array.from(partnerArray.entries()).map(([key, partner]) => (
                    <div className='row' style={{ flexDirection: (isEven(key) ? 'row' : 'row-reverse') }}>
                        <img src={partner.logoUrl} />
                        <p>{partner.description}</p>
                    </div>
                ))}


            </div>
        </div >
    )
}

export default Partners;