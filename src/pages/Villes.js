import React, { useEffect } from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Error from '../components/Error'
import Loading from '../components/Loading'

import CarouselProduct from './CarouselProduct'
import { useLocation } from 'react-router-dom'

const Villes = () => {
 const location = useLocation()
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [location])

  const { data: products, isLoading: loading, error } = useGetProductsQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  // Filter products by category
  const featuredProducts = products.filter(
    (item) => item.categories === 'ville'
  )

  return (
    <div className='arrival section-center'>
      <div className='title'>
        <h3>chaussures de ville</h3>
      </div>
      <CarouselProduct products={featuredProducts} />
    </div>
  )
}

export default Villes
