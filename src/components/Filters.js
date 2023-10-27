// Filters.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilters } from '../slices/filterSlice'

const Filters = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.filter)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(updateFilters({ name, value }))
  }

  return (
    <form>
      {/* Example filter for text */}
      <div>
        <input
          type='text'
          name='text'
          value={filters.text}
          onChange={handleChange}
          placeholder='Search'
        />
      </div>
      {/* Add other filters here */}
    </form>
  )
}

export default Filters
