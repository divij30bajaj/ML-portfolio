import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import data from '../data.json';

const Contact = () => {
    useEffect(() => {
      const section = document.getElementById('contact');
      section.classList.add('visible');
    }, []);

    const email = "mailto:" + data['profile']['email'];
  
    return (
      <div id="contact" className="section" style={{marginTop: "-80px"}}>
        <h2>Contact me</h2>
        <p style={{fontSize: 18}}>{data['contact']}</p>
        <div className="contact-icons">
        <a href={email} className="contact-icon" aria-label="Email">
          <button className='btn btn-primary me-3' style={{backgroundColor: "teal", border: "none"}}>Email</button>
        </a>
        <a href={data['profile']['linkedin']} className="contact-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <button className='btn btn-primary' style={{backgroundColor: "teal", border: "none"}}>LinkedIn</button>
        </a>
      </div>
      </div>
    );
  };
  
  export default Contact;
  