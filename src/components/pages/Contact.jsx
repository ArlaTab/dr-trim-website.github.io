import React from 'react';
import '../../App.css'
import './Contact.css';  // Import your CSS file

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Add more text sections */}
      <p>Give us a call at (831)840-0906!</p>

      <p>We'd love to hear from you! Whether you have questions about our services, need support, or want to provide feedback, don't hesitate to reach out.</p>

      <p>Our team is here to assist you with any inquiries or requests you may have. We aim to respond within 24 hours.</p>

      {/* Add the email form */}
      <div className="form-container">
        <form action="https://formspree.io/f/xgvwpnvo" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

