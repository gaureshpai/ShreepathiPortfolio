'use client'
import React from 'react';
import "../public/styles/Education.css";

const Education = () => {
  const institutions = [
    { name: 'Govt. Higher Primary School Guthinabailu', level: 'Primary', website: 'https://www.example.com/guthinabailu' },
    { name: 'Govt. High School Savanalu', level: 'High School', website: 'https://www.example.com/savanalu' },
    { name: 'Govt. Pre University College Belthangady', level: 'PU', website: 'https://www.example.com/belthangady' },
    { name: 'A J Institute of Engineering and Technology', level: 'UG', website: 'https://www.example.com/ajinstitute' }
  ];

  const handleRedirect = (website: string) => {
    window.location.href = website;
  };

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="card-container">
        {institutions.map((institution, index) => (
          <div className="card" key={index} onClick={() => handleRedirect(institution.website)}>
            <h3 className="institution-name">{institution.name}</h3>
            <p className="institution-level">{institution.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
