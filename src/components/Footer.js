import React from 'react';
import data from '../data.json'

const Footer = () => {
  return (
    <footer>
        <div style={{display: "grid"}}>
            <p style={{justifySelf: "center"}}>&copy; 2024 {data['profile']['name']}. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
