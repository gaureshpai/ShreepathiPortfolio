import React from 'react';
import "../public/styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <h3 className="skill-title">Programming Languages</h3>
          <ul className="skill-items">
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skill">
          <h3 className="skill-title">Web Development</h3>
          <ul className="skill-items">
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="skill">
          <h3 className="skill-title">Singing</h3>
          <p className="skill-description">Vocal Range: Soprano</p>
          <p className="skill-description">Genres: Pop, Classical</p>
        </div>
        <div className="skill">
          <h3 className="skill-title">Dancing</h3>
          <p className="skill-description">Styles: Contemporary, Hip Hop</p>
          <p className="skill-description">Experience: 3 years</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
