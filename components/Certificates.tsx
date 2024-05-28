'use client';
import React from 'react';
import "../public/styles/Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: 'Basics of Python',
      image: '/Certificate 1.jpg',
      provider: 'Infosys Springboard',
      date: '19 Febraury 2024'
    },
    {
      title: 'Time Management',
      image: '/Certificate 2.jpg',
      provider: 'Infosys Springboard',
      date: '13 Febraury 2024'
    },
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
