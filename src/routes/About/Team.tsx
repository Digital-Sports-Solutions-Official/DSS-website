/* Noah Klein */

import './Team.css'

interface Member {
    name: string;
    title: string;
    href: string;
    description: string;
    picture: string;
}

const teamMembers: Array<Member> = [
    {
        name: "Adam Flis",
        title: "CTO",
        href: "https://www.linkedin.com/in/adam-flis/",
        description: "Founder and Chief Technical Officer of Digital Sports Solutions LLC. Adam is set to graduate from The Ohio State University in May 2025 with a B.S. in Computer Science and Engineering and a minor in Entrepreneurship and Innovation. Adam is the lead software developer for the tinyLeague hardware modules and drives company innovation with new ideas.",
        picture: "team/Adam.jpg",
    },
    {
        name: "Andrew Flis",
        title: "CEO",
        href: "https://www.linkedin.com/in/andrew-flis-12b665159/",
        description: "Co-Founder and Chief Executive Officer of Digital Sports Solutions LLC. Andrew is a graduate of The Ohio State University with a Bachelors in Electrical and Computer Engineering. Responsible for the hardware and electrical design of the tinyLeague hardware suite, along with the company's marketing and public relations.",
        picture: "team/Andrew.jpg",
    },
    {
        name: "Michael Wilson",
        title: "CIO",
        href: "https://www.linkedin.com/in/michael-wilson-0bb38b208/",
        description: "Chief Information Officer of Digital Sports Solutions LLC. Michael is a Ohio State University alumni, who graduated in Fall of 2023. A previous Artificial Intelligence Engineer, Michael leads the technical design process team at DSS",
        picture: "team/Michael.jpg",
    },
]

const Team = () => {
    return (
        <div className="Team">
            <h1>Our Team</h1>
            <div className='container'>
                {teamMembers.map((member, index) => (
                    <div className='member' key={index}>

                        <div className="image-container">
                            <a href={member.href} target='_blank'>
                                <img src={member.picture} alt="Foreground" className="foreground-image" draggable="false" />
                            </a>
                            <h3 className='name'>{member.name}</h3>
                            <h3 className='title'>{member.title}</h3>

                            <img src="logos/DSS_LogoMark_FullColor.svg" alt="Background" className="background-image" draggable="false" />
                        </div>

                        <p>{member.description}</p>

                    </div>
                ))}
            </div>
        </div >
    );
}

export default Team;