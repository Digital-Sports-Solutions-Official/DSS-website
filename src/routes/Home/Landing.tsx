/* Noah Klein */

import './Landing.css'

const Landing = ({ }) => {
    return (
        <div className="Landing">
            <div className="column slogan-holder">
                <div>Hardware</div>
                <div>Software</div>
                <div>Sports</div>
                {/* TODO Remove this window.innerWidth */}
                <p>Digital Sports Solutions LLC. {window.innerWidth}</p>
            </div>
            <div className="column image-paragraph">
                <img src='https://computercare.net/wp-content/uploads/2019/08/Blog-Post-Header.png' />
                <p>
                    Digital Sports Solutions is revolutionizing recreational sports leagues with its integrated suite of hardware,
                    user-friendly software, and adaptable database system.
                </p>
                <p>
                    Our tinyLeague ecosystem streamlines league management,
                    improves stat tracking, and simplifies data storage, enhancing the experience for players, spectators, and administrators.
                </p>
            </div>
        </div>
    )
}

export default Landing;