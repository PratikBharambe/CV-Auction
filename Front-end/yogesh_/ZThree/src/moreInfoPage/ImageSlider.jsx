import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import imgOne from '../assets/One.jpg';
import imgTwo from '../assets/two.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true 
  };

  const arr = [imgOne, imgTwo, imgOne, imgTwo, imgOne, imgTwo, imgOne];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arr.map((ig, index) => (
          <div key={index} className="slide">
            <img src={ig} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
