import React from 'react'
import { Link } from 'react-router-dom'

function ListView({ products }) {
  return (
    <div className='list-view'>
      {products.map((product) => (
        <div key={product.id} className='product-list-item'>
          <img src={product.img[0]} alt='' />
          <h3>{product.title}</h3>
          <p>{product.price}CFA</p>
          <Link to={`/product/${product.id}`}>
            <button className='btn'>choix des options</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ListView
