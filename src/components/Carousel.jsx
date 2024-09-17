import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';



const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
        ...style, 
        display: "block", 
        background: "gray",
        }}
        onClick={onClick}
      >
        
      </div>
    );
  };
  
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
        ...style, 
        display: "block", 
        background: "gray",
        }}
        onClick={onClick}
      >
        
      </div>
    );
  };
  
  const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,           // Enables autoplay
      autoplaySpeed: 3000,
    };

  return (
    <section className="carousel__section">
      <h2>Our Products- Before and After</h2>
      <Slider {...settings}>
        <div className="carousel__item">
          <img src={require('../images/tesla_before.jpg')} alt="Item tesla" />
          <p>Before- Tesla Steering Wheel </p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/tesla_after.jpg')} alt="Item tesla2" />
          <p>After- Tesla Steering Wheel </p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-1.jpg')} alt="Item blackcouch" />
          <p>Before-Leather Couch Damage</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-1part2.jpg')} alt="Item blackcouch2" />
          <p>After-Leather Couch Damage </p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-4.jpg')} alt="Carseat" />
          <p>Before- Car Seat </p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-4part2.jpg')} alt="Carseat2" />
          <p>After- Car Seat </p>
        </div>
        {/* Add more items as needed */}
      </Slider>
    </section>
  );
};



export default Carousel;
