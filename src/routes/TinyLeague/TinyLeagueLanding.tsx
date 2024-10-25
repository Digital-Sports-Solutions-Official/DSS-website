/* Noah Klein */

import './TinyLeagueLanding.css'

const TinyLeagueLanding = () => {
    return (
        <div className="TinyLeagueLanding">
            {/* TODO this could be better on mobile */}
            <h1>Introducing <img src='logos/tinyLeague_CombinationMark_Black.svg' draggable='false' /></h1>
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