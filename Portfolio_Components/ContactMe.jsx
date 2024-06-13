import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h1 className="contact">Contact Me</h1>
      <div className="contact-info">
        <a href="tel:+918825350540" className="icon-link">
          <FaPhone size={24} className="icon"  />
          <span>+91-8825350540</span>
        </a>
      </div>
      <div className="contact-info-email">
        <a href="mailto:triptibarnwal1@gmail.com" className="icon-link">
          <FaEnvelope size={24} className="icon" />
          <span>triptibarnwal1@gmail.com</span>
        </a>
      </div>
      <div className="contact-info">
        <a href="https://instagram.com/myprofile" className="icon-link-insta" target="_blank" rel="noopener noreferrer" >
          <FaInstagram size={28} />
        </a>
        <a href="https://linkedin.com/in/myprofile" className="icon-link-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
      </div>
      <div className="cv-button">
        <a href="/path/to/cv.pdf" className="button" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
      <form action="YOUR_BACKEND_ENDPOINT" method="POST" className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder='Your Name' />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder='Your E-mail' />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="3" required placeholder='Enter your message'></textarea>
        </div>
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
