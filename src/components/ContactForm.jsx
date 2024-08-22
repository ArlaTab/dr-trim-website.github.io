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
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Message:
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

