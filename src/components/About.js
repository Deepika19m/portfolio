import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-container">
        {/* BTech Aids in Sri Eshwar College */}
        <div className="about-box">
          <h3>BTech Aids in Sri Eshwar College of Engineering</h3>
          <p>
            I am currently pursuing my BTech in Artificial Intelligence at Sri Eshwar College of Engineering, Coimbatore. 
            The program has provided me with a strong theoretical foundation and hands-on practical experience in AI, 
            including machine learning, data science, and AI algorithms. The exposure to advanced topics and real-world 
            projects has helped me develop a keen understanding of how AI can be applied to various industries.
          </p>
        </div>
        
        {/* AI Developer */}
        <div className="about-box">
          <h3>AI Developer</h3>
          <p>
            As an aspiring AI Developer, I am passionate about building intelligent systems that can solve complex challenges. 
            I focus on creating machine learning models, working with data analysis, and leveraging deep learning techniques 
            to develop innovative solutions. My goal is to contribute to projects that can harness AI technologies to enhance 
            decision-making, automate tasks, and drive efficiency across different sectors.
          </p>
        </div>

        {/* Problem Solver */}
        <div className="about-box">
          <h3>Problem Solver</h3>
          <p>
            I thrive on challenges and enjoy solving problems through innovative approaches. Whether it's debugging complex code 
            or finding optimal solutions to real-world issues, I use my strong analytical skills and technical knowledge to break 
            down problems and develop effective solutions. I’m always looking for ways to improve processes and optimize systems, 
            and I’m committed to continuous learning and growth to enhance my problem-solving abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
