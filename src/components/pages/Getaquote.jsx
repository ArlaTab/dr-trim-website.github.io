import React from 'react';
import '../../App.css';
import './Getaquote.css'; 


const GetQuotePage = () => {
    // Removed file state as it was not used
    // const [file, setFile] = useState(null);
  
    return (
      <div className="quote-container">
        <h1>Get a Quote</h1>
        <p>
          Please fill out the form below to request a quote. Attach a photo if you have specific details or items you want us to assess.
        </p>
  
        {/* Quote form */}
        <form
          action="https://formspree.io/f/xgvwpnvo" // Replace with your Formspree form ID
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
  
          <div className="form-group">
            <label htmlFor="file">Attach Image:</label>
            {/* Removed onChange handler since state management for file is not needed */}
            <input type="file" id="file" name="file" accept="image/*" />
          </div>
  
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default GetQuotePage;