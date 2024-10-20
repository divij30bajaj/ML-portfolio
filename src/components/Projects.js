import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import data from '../data.json';

const Projects = () => {
    useEffect(() => {
        const section = document.getElementById('projects');
        section.classList.add('visible');
      }, []);
  const projects = data['projects'];

  return (
    <div id="projects" className="section my-5">
      <h2>Projects</h2>
      <ul className="list-group">
          {projects.map((value, idx) => {
            return (
              <div className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className='header' style={{display: "flex", textAlign: "start", justifyContent: "space-between"}}>
                      <h5 className="card-title-projects">{value['title']}</h5>
                      <div className="icon-links" style={{marginRight: "20px"}}>
                      {value['github_link'] == "In Progress" && <span className="badge">{"In Progress"}</span>}
                      {value['github_link'] != "In Progress" && <a href="https://github.com/divij30bajaj/context-selector" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                      </a>}
                      </div>
                    </div>
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
          
        {/* <div className="mb-4">
          <div className="card">
            <div className="card-body">
            <div className='header' style={{display: "flex", textAlign: "start", justifyContent: "space-between"}}>
                <h5 className="card-title-projects">Context-Aware Retrieval Augmented Generation (RAG) using Reinforcement Learning</h5>
                <div className="icon-links" style={{marginRight: "20px"}}>
                    
                </div>
              </div>
              <ul className='card-text'>
                <li>Designed an approach to retrieve the sentences relevant to a target sentence from long documents to provide a noise-free context to LLMs.</li>
                <li>Evaluated the method on various downstream NLP tasks like information retrieval and question answering.</li>
              </ul>
            </div>
          </div>
        </div> */}
      </ul>
    </div>
  );
};

export default Projects;
