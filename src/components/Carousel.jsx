import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section className="carousel__section">
      <h2>Our Products- Before and After</h2>
      <Slider {...settings}>
        <div className="carousel__item">
          <img src={require('../images/tesla_before.jpeg')} alt="Item 1" />
          <p>Before- Tesla</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/tesla_after.jpeg')} alt="Item 2" />
          <p>After- Tesla</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-3.jpeg')} alt="Item 3" />
          <p>Product 3</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-4.jpeg')} alt="Item 4" />
          <p>Product 4</p>
        </div>
        <div className="carousel__item">
          <img src={require('../images/img-5.jpeg')} alt="Item 5" />
          <p>Product 5</p>
        </div>
        {/* Add more items as needed */}
      </Slider>
    </section>
  );
};

export default Carousel;
