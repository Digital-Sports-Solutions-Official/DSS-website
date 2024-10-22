/* Noah Klein */

import './Landing.css'

const Landing = () => {
    return (
        <div className="Landing">

            <div className="column slogan-holder">
                <div>Hardware</div>
                <div>Software</div>
                <div>Sports</div>
                <p>Digital Sports Solutions LLC.</p>
            </div>
            {/* TODO Change this image */}
            <div className="column image-paragraph">
                <img src='renders/DSStowers.59.jpg' />
                {/* <img src='renders/untitled.57.jpg' /> */}
                <p>
                    Digital Sports Solutions is revolutionizing recreational sports leagues with its integrated suite of hardware,
                    user-friendly software, and adaptable database system.
                </p>
                <p>
                    Our tinyLeague™ ecosystem streamlines league management,
                    improves stat tracking, and simplifies data storage, enhancing the experience for players, spectators, and administrators.
                </p>
            </div>

        </div>
    )
}

export default Landing;