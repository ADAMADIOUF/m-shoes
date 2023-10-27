import React from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Error from '../components/Error'
import Loading from '../components/Loading'

import CarouselProduct from './CarouselProduct'

const Featured = () => {
  const { data: products, isLoading: loading, error } = useGetProductsQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  // Filter products by category
  const featuredProducts = products.filter((item) => item.featured === true)

  return (
    <div className='arrival section-center'>
      <div className='title'>
        <h3>produits recommandés</h3>
      </div>
      <CarouselProduct products={featuredProducts} />
    </div>
  )
}

export default Featured
