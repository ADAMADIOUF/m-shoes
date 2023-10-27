import React from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const Arrival = () => {
  const { data: products, isLoading: loading, error } = useGetProductsQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  // Filter products by category
  const filteredProducts = products.filter((item) => item.arrival === true)

  return (
    <div className='arrival'>
    <div className="title">
     <h3>produits populares</h3>
    </div>
      <div className='categories-products section-center'>
        {filteredProducts.map((product, index) => (
          <div key={index} className='grid-item'>
            <img src={product.img} alt='' className='categories-img' />
            <h3>{product.title}</h3>
            <p>
              Prix: {product.price} <span>CFA</span>
            </p>
            <Link to={`/product/${product.id}`}>
              <button className='btn'>choix des options</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Arrival
