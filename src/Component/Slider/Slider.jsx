import React, { useState, useEffect } from 'react';
import './Slider.css'
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/66e2e813dba880a7.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cddefe114292edc3.png?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/25e306273d3609bc.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20'
  ];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // 4000ms = 4 seconds

      return () => clearInterval(interval);
    }
  }, [images]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='container'>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <div className="buttons">
            <button style={{height:"100px",background:"white",border:"none"}} onClick={goToPreviousSlide}> &lt; </button>
            <button style={{height:"100px",background:"white",border:"none"}} onClick={goToNextSlide}>&gt;</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
