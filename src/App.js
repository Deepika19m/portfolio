import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact'; // Import Contact component

const App = () => (
  <div className="app">
    <Header />
    
    {/* About Section */}
    <div id="about">
      <About />
    </div>
    
    {/* Projects Section */}
    <div id="projects">
      <Projects />
    </div>
    
    {/* Certifications Section */}
    <div id="certifications">
      <Certifications />
    </div>
    
    {/* Achievements Section */}
    <div id="achievements">
      <Achievements />
    </div>
    
    {/* Skills Section */}
    <div id="skills">
      <Skills />
    </div>
    
    {/* Contact Section */}
    <div id="contact">
      <Contact /> {/* Add Contact component here */}
    </div>

    <Footer />
  </div>
);

export default App;
