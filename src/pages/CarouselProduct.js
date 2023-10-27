import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

const CarouselProduct = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoints for responsive design
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className='carousel-item'>
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
          <p>
            Prix: {product.price} <span>CFA</span>
          </p>
          <Link to={`/product/${product.id}`}>
            <button className='btn'>choix des options</button>
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default CarouselProduct
