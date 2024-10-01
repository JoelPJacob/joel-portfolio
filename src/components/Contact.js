import React from 'react';
import './componentsStyles/Contact.css';
import { Phone, Gmail } from '../assets/icons';

const Contact = () => {
  return (
    <section className="contact">
      <p className='main-heading'>Contact</p>
      <p className='sub-heading'>Hit me up!👇🏼</p>
      
      <div className="contact-item">
        <a href="mailto:joelpjacob3@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Gmail className="contact-icon" />
          <p className='gmail-sub-heading'>joelpjacob3@gmail.com</p>
        </a>
      </div>
      
      <div className="contact-item">
        <div href="https://www.linkedin.com/in/joel-p-jacob" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Phone className="contact-icon linkedin-icon" />
          <p className='gmail-sub-heading'>+91 8156829648</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
