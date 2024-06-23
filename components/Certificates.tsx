'use client';
import React, { useState, useEffect } from 'react';
import { getCerts, connect } from '../db';
import "../public/styles/Certificates.css";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await connect();

        const certs = await getCerts();
        if (certs) setCertificates(certs);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="certificates-container">
      <br /><br /><br /><br /><br />
      <h2 className="section-title">Certificates</h2>
      <div className='certs'>
        {certificates.map((certificate, index) => (
          <div className="certificate" key={index}>
            <h3 className="certificate-title">{certificate.title}</h3>
            <img src={certificate.image} alt={certificate.name} className="certificate-image" />
            <p className="certificate-description"><strong>Provider:</strong> {certificate.provider}</p>
            <p className="certificate-description"><strong>Date of completion:</strong> {certificate.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
