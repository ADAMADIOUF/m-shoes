// slices/filterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.all_products = action.payload
      state.filtered_products = action.payload

      // Set min_price and max_price based on the products
      state.filters.max_price = Math.max(...action.payload.map((p) => p.price))
      state.filters.min_price = Math.min(...action.payload.map((p) => p.price))
      state.filters.price = state.filters.max_price // By default, set the price filter to the max price
    },
    setGridView: (state) => {
      state.grid_view = true
    },
    setListView: (state) => {
      state.grid_view = false
    },
    setSortOption: (state, action) => {
      state.sort = action.payload
    },
    setSearchFilter: (state, action) => {
      state.filters.text = action.payload
    },
    setPriceFilter: (state, action) => {
      state.filters.price = action.payload
    },
    filterProducts: (state) => {
      let tempProducts = [...state.all_products]

      // Search by text
      if (state.filters.text) {
        tempProducts = tempProducts.filter((product) =>
          product.title.toLowerCase().includes(state.filters.text.toLowerCase())
        )
      }

      // Filter by price
      tempProducts = tempProducts.filter(
        (product) => product.price <= state.filters.price
      )

      // Sort
      if (state.sort === 'price-lowest') {
        tempProducts.sort((a, b) => a.price - b.price)
      } else if (state.sort === 'price-highest') {
        tempProducts.sort((a, b) => b.price - a.price)
      } else if (state.sort === 'name-a') {
        tempProducts.sort((a, b) => a.title.localeCompare(b.title))
      } else if (state.sort === 'name-z') {
        tempProducts.sort((a, b) => b.title.localeCompare(a.title))
      }

      state.filtered_products = tempProducts
    },
  },
})

export const {
  setAllProducts,
  setGridView,
  setListView,
  setSortOption,
  setSearchFilter,
  setPriceFilter,
  filterProducts,
} = filterSlice.actions

export default filterSlice.reducer
