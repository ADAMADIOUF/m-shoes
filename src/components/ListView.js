// ListView.js
import React from 'react'

const ListView = ({ products }) => {
  return (
    <div className='list-view'>
      {products.map((product) => (
        <div key={product.id} className='product-item'>
          <img src={product.img[0]} alt='' />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          {/* Add other product details as needed */}
        </div>
      ))}
    </div>
  )
}

export default ListView
