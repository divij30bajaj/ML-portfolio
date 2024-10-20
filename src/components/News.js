import React, { useEffect, useState } from 'react';
import '../App.css';
import data from '../data.json';

const News = () => {
  // const [highlights, setHighlights] = useState();
  // useEffect(() => {
  //   setHighlights(data['highlights']);
  // }, [highlights]);
  const highlights = data['highlights'];
  return (
    <div id="news" className="section visible" style={{marginTop: "-100px"}}>
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Highlights</h5>
            <ul className='card-text'>
            {highlights && highlights.map((value, idx) => {
              return (
              <li dangerouslySetInnerHTML={{ __html: value }} key={idx}></li>)
            })}
            </ul>
        </div>
        </div>
    </div>
  );
};

export default News;
