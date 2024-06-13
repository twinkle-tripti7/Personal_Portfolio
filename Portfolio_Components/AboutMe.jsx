import React, { useState } from 'react';
import image from '../Images/WhatsApp Image 2024-05-28 at 01.07.14_a831aa8b.jpg';

function About() {
    const [showSkills, setShowSkills] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showCodingProfile, setShowCodingProfile] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
        setShowEducation(false);
        setShowCodingProfile(false);
    };

    const toggleEducation = () => {
        setShowEducation(!showEducation);
        setShowSkills(false);
        setShowCodingProfile(false);
    };

    const toggleCodingProfile = () => {
        setShowCodingProfile(!showCodingProfile);
        setShowSkills(false);
        setShowEducation(false);
    };

    return (
        <>
            <div className='big_div'>
                <div className='myimage'>
                    <img src={image} alt="Profile" />
                </div>
                <div className='AboutMe' id="about">
                    <h1>About Me</h1>
                    <p className='describe'>Hello, This side Tripti Barnwal. I am currently pursuing B.Tech degree in Computer Science and Engineering from C.V. Raman Global University(CGU), Bhubaneswar. Looking for internships to gain real world experience.
                        Innovative Frontend Developer with a strong background in
                        data structures, algorithms, and Java programming. Passionate about machine
                        learning and actively seeking opportunities to expand knowledge in this field. I am also a part of NSS unit at CGU.</p>
                    <nav className='nav_bar'>
                        <h3 className='nav-skills'  onClick={toggleSkills}>Skills</h3>
                        <h3 className='nav-education' onClick={toggleEducation}>Education</h3>
                        <h3 className='nav-coding-profile' onClick={toggleCodingProfile}>Coding Profile</h3>
                    </nav>
                    {showSkills && (
                        <div className='skills-grid' >
                            <span>HTML5</span>
                            <span>CSS</span>
                            <span>Sass</span>
                            <span>JavaScript</span>
                            <span>Angular.js</span>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Redux</span>
                            <span>Responsive Web Design</span>
                            <span>Java</span>
                            <span>Python</span>
                            <span>C++</span>
                            <span>Database Management System</span>
                            <span>Operating System</span>
                            <span>MySQL</span>
                            <span>Git & Github</span>
                            <span>Software Development</span>
                            <span>Problem Solving</span>
                            <span>Leadership</span>
                            <span>Public Speaking</span>
                            <span>Numpy</span>
                            <span>Matplotlib</span>
                            <span>Pandas</span>
                        </div>
                    )}
                    {showEducation && (
                        <div className='education-section' >
                            <p>2022-2026</p>
                            <p>C.V. Raman Global University</p>
                            <p>CGPA: 9.2</p>
                            <br />
                            <p>2020-2022</p>
                            <p>DAV Model School, CFRI</p>
                            <p>Score: 94%</p>
                            <br />
                            <p>2008-2020</p>
                            <p>Mount Carmel School Digwadih</p>
                            <p>Score: 94.4%</p>
                        </div>
                    )}
                    {showCodingProfile && (
                        <div className='coding-profile-section'>
                            <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">LeetCode</a>
                            
                            <br />
                            <a href="https://www.codechef.com/users/yourusername" target="_blank" rel="noopener noreferrer">CodeChef</a>
                            <br />
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
