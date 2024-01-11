import { CONTACT_URL, PRODUCTS_URL, SINGLE_PRODUCT_URL } from '../constants'
import { apiSlice } from "./apiSlice";
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search = '') =>
        `${PRODUCTS_URL}?query=${encodeURIComponent(search)}`,
      providesTags: ['Product'],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${SINGLE_PRODUCT_URL}${productId}`,
      }),
      providesTags: ['Product'],
    }),
    sendContactForm: builder.mutation({
      query: (contactData) => ({
        url: CONTACT_URL,
        method: 'POST',
        body: contactData,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useSendContactFormMutation,
} = productsApiSlice