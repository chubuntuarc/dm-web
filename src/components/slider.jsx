import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ 
              transform: `translateX(calc(-${currentSlide * 100}% + ${index * 100}%))`
            }}
          >
            <div className={styles.slideImageContainer}>
              <img src={slide.image} alt={slide.title || ''} className={styles.slideImage} />
            </div>
            <div className={styles.slideContent}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              {slide.description && (
                <p className={styles.slideDescription}>{slide.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.sliderControls}>
        <button 
          className={`${styles.sliderArrow} ${styles.prev}`} 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`${styles.sliderDot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className={`${styles.sliderArrow} ${styles.next}`} 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
