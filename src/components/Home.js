import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import data from '../data.json'

const Home = () => {
    useEffect(() => {
        const section = document.getElementById('home');
        section.classList.add('visible');
      }, []);
  return (
    <div id="home" className="section my-5"  style={{display: "flex"}}>
      <div className="home" style={{display: "flex", flexDirection: "column", marginTop: "40px"}}>
        <img src='dp.jpeg' style={{borderRadius: "50%"}}></img>
        <div style={{display: "flex", marginTop: "20px"}}>
        <a href={data['profile']['github']} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link-home"
          ><FontAwesomeIcon icon={faGithub} className='fa-2xl pe-3 ps-3'/>
          </a>
          <a href={data['profile']['linkedin']} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link-home"
          >
            <FontAwesomeIcon icon={faLinkedin} className='fa-2xl pe-2 ps-1'/>
            </a>
            <a href={data['profile']['Gscholar']} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link-home"
          >
            <FontAwesomeIcon icon={faGoogleScholar} className='fa-2xl ps-3' />
            </a>
        </div>
      </div>
      <div id="headline" style={{alignContent: "center", color: "#003366"}}>
      <h4>Hi, I'm</h4>
      <h1 style={{fontSize: 60}}>{data['profile']['name']}</h1>
      <p className="lead" style={{fontSize: 18}}><b>{data['profile']['headline']}</b></p>
      <a href={data['profile']['resume']} download style={{ textDecoration: 'none' }}>
      <button className='btn btn-primary' style={{backgroundColor: "teal", border: "none"}}>Resume<FontAwesomeIcon icon={faDownload} className='ms-2'/></button>
      </a>
      </div>
    </div>
  );
};

export default Home;
