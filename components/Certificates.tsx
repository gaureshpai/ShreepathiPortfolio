'use client';
import React from 'react';
import "../public/styles/Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: 'Certificate Title 1',
      image: '/certificate1.jpg',
      provider: 'Infosys Springboard',
      date: 'Date of completion'
    },
    {
      title: 'Certificate Title 2',
      image: '/certificate2.jpg',
      provider: 'Infosys Springboard',
      date: 'Date of completion'
    },
    // Add more certificates as needed
  ];

  return (
    <div className="certificates-container">
      <h2 className="section-title">Certificates</h2>
      <div className='certs'>
        {certificates.map((certificate, index) => (
          <div className="certificate" key={index}>
            <h3 className="certificate-title">{certificate.title}</h3>
            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
            <p className="certificate-description"><strong>Provider:</strong> {certificate.provider}</p>
            <p className="certificate-description"><strong>Date of completion:</strong> {certificate.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
