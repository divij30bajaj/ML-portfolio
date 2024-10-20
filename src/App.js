import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Bio from './components/Bio';
import Experience from './components/Experience'
import Contact from './components/Contact'
import News from './components/News';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App" style={{display: "grid", justifyContent: "center", width: "75vw", margin: "0 auto"}}>
        <Navbar />
        <Home />
        <News />
        <Bio />
        <Experience/>
        <Publications />
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
