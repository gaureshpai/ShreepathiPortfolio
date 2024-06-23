'use client'
import React, { useState, useEffect } from 'react';
import { getAbout,connect} from '../db';
import '@/public/styles/About.css';

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await connect();

        const about:any[] = await getAbout();
        if (about) setAboutData(about);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <br /><br /><br /><br /><br />
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {aboutData.map((item) => (
            <div key={item?._id}>
              <p>{item.l1}</p>
              <p>{item.l2}</p>
              <p>{item.l3}</p>
              <p>{item.l4}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
