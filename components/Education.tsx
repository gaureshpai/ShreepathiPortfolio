'use client'
import React from 'react';
import "../public/styles/Education.css";

const Education = () => {
  const institutions = [
    { name: 'Govt. Higher Primary School Guthinabailu', level: 'Primary', website: 'https://schools.org.in/dakshina-kannada/29240206501/dkzp-govt-higher-primary-school-guthina-bail.html' },
    { name: 'Govt. High School Savanalu', level: 'High School', website: 'https://schools.org.in/dakshina-kannada/29240206503/nethaji-subhashchandra-bose-dkzp-govt-high-school-savanalu.html' },
    { name: 'Govt. Pre University College Belthangady', level: 'PU', website: 'https://www.onemangalore.com/government-pre-university-college-belthangady/' },
    { name: 'A J Institute of Engineering and Technology', level: 'UG', website: 'https://www.ajiet.edu.in/' }
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
