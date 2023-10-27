// ProductList.js
import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products, grid_view } = useSelector((state) => state.filter)

  if (filtered_products.length === 0) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    )
  }

  if (grid_view === true) {
    return <GridView products={filtered_products} />
  }

  return <ListView products={filtered_products} />
}

export default ProductList
