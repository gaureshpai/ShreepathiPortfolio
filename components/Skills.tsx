'use client';
import React from 'react';
import "../public/styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      title: 'Programming Languages',
      items: ['Java', 'Python', 'C', 'C++'],
    },
    {
      title: 'Web Development',
      items: ['HTML5', 'CSS3'],
    },
    {
      title: 'Singing',
      description: [
        'Vocal Range: Soprano',
        'Genres: Pop, Classical',
      ],
    },
    {
      title: 'Dancing',
      description: [
        'Styles: Contemporary, Hip Hop',
        'Experience: 3 years',
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h3 className="skill-title">{skill.title}</h3>
            {skill.items ? (
              <ul className="skill-items">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              skill.description.map((desc, idx) => (
                <p className="skill-description" key={idx}>{desc}</p>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
