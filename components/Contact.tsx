'use client'
import React, { useState } from 'react';
import "../public/styles/Contact.css";
import { saveFormSubmit } from './form';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveFormSubmit(Object.fromEntries(new FormData(e.currentTarget)));
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  };

  return (
    <div className="contact-container">
      <h2 className='title'>Contact Me</h2>
      <p>If you have any questions, feedback, or collaboration opportunities, feel free to reach out to me.</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea id="message" name="message" rows={5} placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="submit-container">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
