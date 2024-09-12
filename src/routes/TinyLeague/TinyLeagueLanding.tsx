/* Noah Klein */

import './TinyLeagueLanding.css'

const TinyLeagueLanding = ({ }) => {
    //TODO Make this more reactive
    //TODO Include the tinyLeague mantra
    return (
        <div className="TinyLeagueLanding">
            <h1>Introducing tinyLeague</h1>
            <div className="row">
                <img src="Clkr-transparent.png" />
                <p>
                    tinyLeague is the flagship product line from Digital Sports Solutions changing the way sport leagues operate from their core.
                    A combination of intelligent, sleek hardware and robust, feature-packed software allow for a new layer of depth,
                    enabling sports leagues of all shapes and sizes to compete like the pros do.
                </p>
            </div>
        </div>
    )
}

export default TinyLeagueLanding;