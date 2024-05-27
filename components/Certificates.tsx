import React from 'react';
import "../public/styles/Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h2 className="section-title">Certificates</h2>
      <div className='certs'>
        <div className="certificate">
          <h3 className="certificate-title">Certificate Title 1             </h3>
          <img src="/certificate1.jpg" alt="Certificate 1" className="certificate-image" />
          <p className="certificate-description"><strong>Provider:</strong>Infosys Springboard</p>
          <p className="certificate-description"><strong>Date of completion:</strong>                      </p>
        </div>
        <div className="certificate">
          <h3 className="certificate-title">Certificate Title 2              </h3>
          <img src="/certificate2.jpg" alt="Certificate 2" className="certificate-image" />
          <p className="certificate-description"><strong>Provider:</strong>Infosys Springboard</p>
          <p className="certificate-description"><strong>Date of completion:</strong>                 </p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
