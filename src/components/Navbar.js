import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import data from "../data.json"

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const handleNavbar = () => {
      const section = document.getElementById('navbarNav');
      if(navbarVisible) {
        section.classList.add('collapse');
        setNavbarVisible(false);
      }
      else {
        section.classList.remove('collapse');
        setNavbarVisible(true);
      }
  }
  const sections = Object.keys(data).slice(2);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: "#007C7F"}}>
      <div className="container">
        <a className="navbar-brand" href="#" style={{color: "white"}}>{data['profile']['name']}</a>
        <button className="navbar-toggler" type="button" onClick={handleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "flex-end"}}>
          <ul className="navbar-nav">
            {sections.map((item, idx) => {
                return (
                  <li className="nav-item">
                    <Link className="nav-link me-2" to={item} smooth={true} duration={100} style={{color: "white"}} onClick={handleNavbar}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                  </li>
                )
            })}
            
            {/* <li className="nav-item">
              <Link className="nav-link me-2" to="experience" smooth={true} duration={100} style={{color: "white"}} onClick={handleNavbar}>Background</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" to="publications" smooth={true} duration={100} style={{color: "white"}} onClick={handleNavbar}>Publications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" to="projects" smooth={true} duration={100} style={{color: "white"}} onClick={handleNavbar}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={100} style={{color: "white"}} onClick={handleNavbar}>Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
