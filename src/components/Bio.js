import React from 'react';
import { useEffect } from 'react';
import data from '../data.json'

const Bio = () => {
    useEffect(() => {
        const section = document.getElementById('about');
        section.classList.add('visible');
      }, []);
  return (
    <div id="about" className="section my-5">
      <h2>About Me</h2>
      <p style={{textAlign: "justify"}} dangerouslySetInnerHTML={{__html: data['about']}}></p></div>
  );
};

export default Bio;
