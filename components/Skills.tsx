'use client';
import React, { useState, useEffect } from 'react';
import { getSkills, connect } from '../db';
import "../public/styles/Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await connect();

        const skillsData = await getSkills();
        if (skillsData) setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="skills-container">
      <br /><br /><br /><br /><br />
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h3 className="skill-title">{skill.title}</h3>
            {Array.isArray(skill.items) ? (
              <ul className="skill-items">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="skill-description">{skill.items}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
