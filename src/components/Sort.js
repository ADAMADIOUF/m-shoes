import React from 'react'

function Sort({ onSortChange }) {
  return (
    <select onChange={onSortChange}>
      <option value='price-lowest'>Prix (le moins cher)</option>
      <option value='price-highest'>Prix (le plus cher)</option>
      <option value='name-a'>Nom (A-Z)</option>
      <option value='name-z'>Nom (Z-A)</option>
    </select>
  )
}

export default Sort
