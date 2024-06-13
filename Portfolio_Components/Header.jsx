import React, { useState } from 'react';
import './css/style.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='header'>
            <div className='nav'>
                <div className='hamburger' onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                    <li className="li-home"><div className='Home' >Home</div></li>
                    <a href="#about" > <li className="li-about"><div className='About'>About Me</div></li></a>
                    <a href="#about"><li className='li-education'><div className="Education">Education</div></li></a>
                    <a href="#certification"><li className="li-certification"><div className='Certification'>Certification</div></li></a>
                    <a href="#project"> <li className='li-project'><div className='Projects'>Projects</div></li></a>
                    <a href="#about"><li className="li-skills"><div className='Skills'>Skills</div></li></a>
                </nav>
            </div>
            <h2 className='post'>Front-End Developer</h2>
            <p className='greet'>Hi, I'm TRIPTI </p>
            <p className='address'>from Jharkhand</p>
        </div>
    );
};

export default Header;
