import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import {
  setAllProducts,
  setGridView,
  setListView,
  setSortOption,
  filterProducts,
  setSearchFilter,
} from '../slices/filterSlice'
import GridView from '../components/GridView'
import ListView from '../components/ListView'
import Sort from '../components/Sort'
import { FaList, FaTh } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function ProductComponent() {
    const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const dispatch = useDispatch()
  const { data: products } = useGetProductsQuery()
  const filterState = useSelector((state) => state.filter)

  useEffect(() => {
    if (products) {
      dispatch(setAllProducts(products))
    }
  }, [products, dispatch])

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value))
    dispatch(filterProducts())
  }

  const handleSearchChange = (e) => {
    dispatch(setSearchFilter(e.target.value))
    dispatch(filterProducts())
  }

  const handleGridView = () => {
    dispatch(setGridView())
  }

  const handleListView = () => {
    dispatch(setListView())
  }

  return (
    <div className='products-page section-center'>
      <div>
        <input
          type='text'
          placeholder='Rechercher des produits...'
          onChange={handleSearchChange}
        />
        <Sort onSortChange={handleSortChange} />
        <button onClick={handleGridView}>
          <FaTh /> 
        </button>{' '}
        <button onClick={handleListView}>
          <FaList /> 
        </button>
      </div>

      <div>
        {filterState.grid_view ? (
          <GridView products={filterState.filtered_products} />
        ) : (
          <ListView products={filterState.filtered_products} />
        )}
      </div>
    </div>
  )
}

export default ProductComponent
