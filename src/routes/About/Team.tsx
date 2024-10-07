/* Noah Klein */

import './Team.css'

const teamMembers = [
    {
        name: "Adam Flis",
        description: "Founder and Chief Technical Officer of Digital Sports Solutions LLC. Adam is set to graduate from The Ohio State University in May 2025 with a B.S. in Computer Science and Engineering and a minor in Entrepreneurship and Innovation. Adam is the lead software developer for the Clkr hardware modules and drives company innovation with new ideas.",
        picture: "team/cute.jpg",
    },
    {
        name: "Andrew Flis",
        description: "Co-Founder and Chief Executive Officer of Digital Sports Solutions LLC. Andrew is a graduate of The Ohio State University with a Bachelors in Electrical and Computer Engineering. Responsible for the hardware and electrical design of the Clkr hardware suite, along with the company's marketing and public relations.",
        picture: "team/andrew.jpg",
    },
    {
        name: "Michael Wilson",
        description: "Chief Information Officer of Digital Sports Solutions LLC. Michael is a Ohio State University alumni, who graduated in Fall of 2023. A previous Artificial Intelligence Engineer, Michael leads the technical design process team at DSS",
        picture: "team/mike.JPG",
    },
]

const Team = () => {
    return (
        <div className="Team">
            <h2>Our team</h2>
            {teamMembers.map((member, index) => (
                <div className='member' key={index}>
                    <h2>{member.name}</h2>
                    <img src={member.picture} />
                    <p>{member.description}</p>
                </div>
            ))}
        </div >
    );
}

export default Team;