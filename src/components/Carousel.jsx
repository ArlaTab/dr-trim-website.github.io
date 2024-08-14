import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        onClick={onClick}
      >
        <FaArrowRight style={{ color: 'black', fontSize: '30px' }} />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        onClick={onClick}
      >
        <FaArrowLeft style={{ color: 'black', fontSize: '30px' }} />
      </div>
    );
  };
  
  const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

  return (
    <section className="carousel__section">
      <h2>Our Products- Before and After</h2>
      <Slider {...settings}>
        <div className="carousel__item">
          <img src={require('../images/tesla_before.jpeg')} alt="Item tesla" />
          <p>Before- Tesla Steering Wheel Damage</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/tesla_after.jpeg')} alt="Item tesla2" />
          <p>After- Tesla Steering Wheel Repaired</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-1.jpeg')} alt="Item blackcouch" />
          <p>Before-Leather Couch Damage</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-1part2.jpeg')} alt="Item blackcouch2" />
          <p>After-Leather Couch Damage Repaired</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-4.jpeg')} alt="Carseat" />
          <p>Before- Car Seat Damage</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-4part2.jpeg')} alt="Carseat2" />
          <p>After- Car Seat Repaired</p>
        </div>
        {/* Add more items as needed */}
      </Slider>
    </section>
  );
};



export default Carousel;
