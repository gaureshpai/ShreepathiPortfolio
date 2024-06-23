'use client';
import React, { useState, useEffect } from 'react';
import { getEducation, connect } from '../db';
import "../public/styles/Education.css";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await connect();

        const educationData = await getEducation();
        if (educationData) setEducations(educationData);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="education-container">
      <br /><br /><br /><br /><br />
      <h2 className="education-title">Education</h2>
      <div className="card-container">
        {educations.map((education, index) => (
          <div className="card" key={index} onClick={() => handleRedirect(education.website)}>
            <h3 className="institution-name">{education.name}</h3>
            <p className="institution-level">{education.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
