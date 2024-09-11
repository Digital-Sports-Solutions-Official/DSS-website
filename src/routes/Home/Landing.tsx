/* Noah Klein */

import './Landing.css'

const Landing = ({ }) => {
    return (
        <div className="Landing">
            <div className='row' style={{ alignItems: 'start' }}>
                {/* TODO add sheen to hardware software sports */}
                <div className="column slogan-holder">
                    <div>Hardware</div>
                    <div>Software</div>
                    <div>Sports</div>
                    <p>Digital Sports Solutions LLC.</p>
                </div>
                <div className="column right">
                    <img src='https://computercare.net/wp-content/uploads/2019/08/Blog-Post-Header.png' />
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Duis nisi netus aptent augue facilisis sociosqu himenaeos turpis. Habitasse convallis ipsum morbi metus massa cursus. Ataciti scelerisque sapien pretium scelerisque erat fermentum congue. Montes curabitur commodo at orci morbi. Posuere adipiscing dui vestibulum; per cras augue arcu?
                    </p>
                    <p>
                        Mi aliquam ipsum aliquet neque class faucibus ligula. Hac interdum eget tristique blandit nunc aliquet in phasellus. Class ornare nullam congue metus praesent cubilia ridiculus rutrum. Quis porttitor facilisi habitasse adipiscing eu aliquam. Magna enim parturient sit arcu dictum magna feugiat mollis orci? Blandit potenti posuere vehicula; vestibulum habitant penatibus scelerisque. Sollicitudin turpis dictum odio efficitur blandit. Donec inceptos risus sodales sagittis sollicitudin per.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Landing;