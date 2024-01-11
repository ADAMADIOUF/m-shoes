import React, { useState, useEffect } from 'react'
import sliderData from '../dataSlider'
import { gsap } from 'gsap'

const Slider = ({ intervalTime }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [intervalTime, activeSlide])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } })

    tl.fromTo(
      '.header-content h2',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1 }
    ).fromTo(
      '.header-content p',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1 },
      '-=0.5'
    )
  }, [activeSlide])

  return (
    <div className='slider'>
      <div className='slides-container'>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img src={slide.img} alt={slide.title} className='slide-image' />
            <div className='header'>
              <div className='header-content'>
                <h2>{slide.title}</h2>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='dots-container'>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
