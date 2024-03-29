import React, { useState } from 'react'

import { useGetProductsQuery } from '../slices/productsApiSlice';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm)

  // Search.js

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
    console.log('Search Term:', newSearchTerm) // Debugging line
  }

  return (
    <div className='search'>
      <form className='search-input'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='input-form'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='13'
          height='12'
          viewBox='0 0 13 12'
          fill='none'
        >
          <path
            d='M5.24084 0C2.41163 0 0.0966797 2.23525 0.0966797 4.97292C0.0966797 7.71059 2.41163 9.95064 5.24084 9.95064C6.28785 9.94906 7.30904 9.63597 8.16595 9.05382L10.9472 11.7395C11.0311 11.822 11.1312 11.8875 11.2416 11.9322C11.3519 11.977 11.4704 12 11.59 12C11.7097 12 11.8281 11.977 11.9385 11.9322C12.0488 11.8875 12.1489 11.822 12.2328 11.7395C12.3169 11.6581 12.3837 11.5615 12.4292 11.4552C12.4747 11.3489 12.4982 11.2349 12.4982 11.1199C12.4982 11.0048 12.4747 10.8908 12.4292 10.7845C12.3837 10.6782 12.3169 10.5816 12.2328 10.5003L9.4524 7.80899C10.0553 6.97838 10.3787 5.98796 10.3784 4.97292C10.3792 2.23525 8.06426 0 5.24084 0ZM5.24084 1.75204C5.67798 1.75088 6.11104 1.83344 6.51505 1.99497C6.91907 2.1565 7.28605 2.3938 7.59485 2.69321C7.90365 2.99261 8.14816 3.34819 8.31428 3.73945C8.48041 4.13072 8.56487 4.54993 8.5628 4.97292C8.56476 5.39585 8.48022 5.81497 8.31404 6.20614C8.14787 6.59731 7.90334 6.9528 7.59455 7.25211C7.28577 7.55143 6.91882 7.78867 6.51486 7.95015C6.1109 8.11163 5.67791 8.19416 5.24084 8.193C4.80331 8.1948 4.36975 8.11273 3.96517 7.95155C3.56059 7.79036 3.193 7.55324 2.88362 7.25387C2.57424 6.9545 2.32919 6.59881 2.16261 6.20732C1.99604 5.81583 1.91123 5.39629 1.91309 4.97292C1.91112 4.54948 1.99585 4.12986 2.16237 3.73828C2.3289 3.34669 2.57393 2.99091 2.88333 2.69145C3.19272 2.39199 3.56034 2.1548 3.96498 1.99357C4.36961 1.83233 4.80324 1.75024 5.24084 1.75204Z'
            fill='#BBBBBB'
          />
        </svg>
      </form>
    </div>
  )
}

export default Search
