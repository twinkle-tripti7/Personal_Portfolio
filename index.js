import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Portfolio_Components/Header';
import './Portfolio_Components/css/style.css';
import   About from './Portfolio_Components/AboutMe';
import Certification from './Portfolio_Components/Certification';
import Projects from './Portfolio_Components/Projects';
import ContactMe from './Portfolio_Components/ContactMe';
import Footer from './Portfolio_Components/Footer';


ReactDOM.render(
        <>
        <Header/>
        <About/>
        <Certification/>
        <Projects/>
        <ContactMe/>
        <Footer/>
        </>,
         document.getElementById("root")

);
