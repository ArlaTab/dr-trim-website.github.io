// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form 
      action="https://formspree.io/f/xgvwpnvo"  // Replace with your Formspree endpoint
      method="POST"
    >
        <input 
          className="footer-input" 
          placeholder="Your Name"
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          className="footer-input" 
          placeholder="Your Email"
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          className="footer-input" 
          placeholder="Message"
          name="message"
          rows="4" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button 
         type="submit"
         className='btn--primary btn--medium'>
            Submit
        </button>
    </form>
  );
};

export default ContactForm;

