import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  return (
    <div className="carousel">
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide}`}
      />
      <button
        className="arrowLeft"
        onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
      >
        &#8592;
      </button>
      <button
        className="arrowRight"
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
      >
        &#8594;
      </button>
    </div>
  );
}

export default Carousel;