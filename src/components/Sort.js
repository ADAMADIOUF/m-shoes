// Sort.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSort } from '../slices/filterSlice'

const Sort = () => {
  const dispatch = useDispatch()
  const { sort } = useSelector((state) => state.filter)

  return (
    <div>
      <label htmlFor='sort'>Sort By</label>
      <select
        name='sort'
        id='sort'
        value={sort}
        onChange={(e) => dispatch(updateSort(e.target.value))}
      >
        <option value='price-lowest'>Price (Lowest)</option>
        <option value='price-highest'>Price (Highest)</option>
        {/* Add other sorting options here */}
      </select>
    </div>
  )
}

export default Sort
