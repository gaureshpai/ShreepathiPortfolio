'use client'
import React, { useState } from 'react';
import "../public/styles/Contact.css";
import { saveFormSubmit, getAllMessages } from './form';
import Link from 'next/link';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const saveResponse = await saveFormSubmit(Object.fromEntries(new FormData(e.currentTarget)) as Record<string, any>);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitted(true);
    window.alert('Your message has been sent successfully!');
    setTimeout(() => setIsSubmitted(false), 3000);

    if (saveResponse === true) {
      const messagesResponse = await getAllMessages();
      if (messagesResponse.success) {
        window.alert(`Number of messages: ${messagesResponse.count}`);
      } else {
        window.alert('There was an error retrieving messages.');
      }
    } else {
      window.alert('There was an error submitting your message.');
    }
  };

  return (
    <div className="contact-container">
      <br /><br /><br /><br /><br />
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

      <div className="view-messages-container">
        <Link href={'/contact'}>View All Messages</Link>
      </div>
    </div>
  );
}

export default Contact;
