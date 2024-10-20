import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import data from "../data.json";

const Publications = () => {
  useEffect(() => {
    const section = document.getElementById('publications');
    section.classList.add('visible');
  }, []);

  const publications = data['publications'];
  const num = (publications.length > 0);

  return (
    num && <div id="publications" className="section my-5">
      <h2>Publications</h2>
      <ul className="list-group">
          {publications.map((value, idx) => {
            return (
              <div className="mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div style={{display: "flex", textAlign: "start", justifyContent: "space-between"}}>
                      <div className="header" style={{ display: "flex"}}>
                        <h5 className="card-title">{value['title']}</h5>
                        <span className="badge">{value['venue']}</span>
                        </div>
                        <div className="icon-links" style={{marginRight: "20px"}}>
                            <a href={value['github_link']} target="_blank" rel="noopener noreferrer" className="icon-link">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                            <span style={{ margin: '0 5px' }}>|</span>
                            <a href={value['pdf_link']} target="_blank" rel="noopener noreferrer" className="icon-link">
                                <FontAwesomeIcon icon={faFilePdf} /> PDF
                            </a>
                        </div>
                      </div>
                      <p className="card-text" style={{color: "#575756", textAlign: "start"}} dangerouslySetInnerHTML={{ __html: value['authors'] }}></p>
                      <ul className='card-text'>
                        {value['description'].map((desc, i) => {
                          return (
                            <li>{desc}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
              </div>
            )
          })}
      </ul>
    </div>
  );
};

export default Publications;
