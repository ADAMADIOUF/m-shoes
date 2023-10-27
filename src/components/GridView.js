// GridView.js
import React from 'react'

const GridView = ({ products }) => {
  return (
    <div className='grid-view'>
      {products.map((product) => (
        <div key={product.id} className='product-item'>
          <img src={product.img[0]} alt="" />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          
        </div>
      ))}
    </div>
  )
}

export default GridView
