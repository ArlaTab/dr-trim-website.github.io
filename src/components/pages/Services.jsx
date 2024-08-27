import React from 'react';
import '../../App.css';
import './Services.css'; 


const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      
      {/* Add more text sections */}
      <p>We offer a wide range of services to meet your needs mobile automotive interior repair, providing high-quality services directly to our customers' locations. In addition to automotive interiors, we also offer expert furniture repair services. We have the expertise to help you achieve your goals.</p>
      
      <p>Areas of service include include Salinas, Seaside, Monterey, and Watsonville. </p>
      
      {/* Embed a local video with autoplay and loop */}
      <div className="video-section">
        <h2>Watch Our Service Overview</h2>
        <div className="video-wrapper">
          <video width="100%" controls autoPlay loop muted>
            <source src="/videos/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Add more text sections if needed */}
      <p>For more information about our services, feel free to contact us. We look forward to working with you!</p>
    </div>
  );
};

export default ServicesPage;
