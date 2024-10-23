/* Noah Klein */

import './TinyLeagueLanding.css'

const TinyLeagueLanding = () => {
    //TODO Include the tinyLeague mantra

    // TODO link to the new tinyLeague domain
    // TODO find the oomph
    return (
        <div className="TinyLeagueLanding">
            {/* TODO Make this work */}
            <h1><span>Introducing tinyLeague<img src='logos/DSS_LogoMark_FullColor.svg' draggable='false' /></span></h1>
            <div className="container">
                <img src='renders/DSStowers.58.png' draggable='false' />

                <p>
                    tinyLeague™ is the flagship product line from Digital Sports Solutions changing the way sport leagues operate from their core.
                    A combination of intelligent, sleek hardware and robust, feature-packed software allow for a new layer of depth,
                    enabling sports leagues of all shapes and sizes to compete like the pros do.
                </p>
            </div>
        </div>
    )
}

export default TinyLeagueLanding;