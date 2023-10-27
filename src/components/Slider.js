import React, { useState, useEffect } from 'react'
import sliderData from '../dataSlider'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
gsap.registerPlugin(PixiPlugin)
const Slider = ({ intervalTime }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [intervalTime])
const [animate, setAnimate] = useState(false)

useEffect(() => {
  setAnimate(true)

  
  const titleAnimation = gsap.fromTo(
    '.header-content h2',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1 }
  )
  const descriptionAnimation = gsap.fromTo(
    '.header-content p',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1 }
  )

  
  const tl = gsap.timeline()

  tl.add(titleAnimation, 0) 
  tl.add(descriptionAnimation, 0.5) 

  
  tl.play()
}, [])
  return (
    <div className={animate ? 'image-animation slider' : ''}>
      <div className='slides-container'>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img src={slide.img} alt='' className='slide-image' />
            <div className='header'>
              <div className='header-content'>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
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
