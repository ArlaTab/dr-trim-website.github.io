import React from 'react';
import '../../App.css';
import './Services.css'; 


const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      
      {/* Add more text sections */}
      <p>We offer a wide range of services to meet your needs. Whether you're looking for professional consulting, high-quality design, or cutting-edge development, we have the expertise to help you achieve your goals.</p>
      
      <p>Our team of experienced professionals is committed to delivering top-notch service and ensuring customer satisfaction. We work closely with our clients to understand their needs and deliver tailored solutions that exceed their expectations.</p>
      
      {/* Add a video section */}
      <div className="video-section">
        <h2>Watch Our Service Overview</h2>
        <div className="video-wrapper">
          {/* Video embed using an iframe */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/your-video-id" 
            title="Service Overview Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Add more text sections if needed */}
      <p>For more information about our services, feel free to contact us. We look forward to working with you!</p>
    </div>
  );
};

export default ServicesPage;
