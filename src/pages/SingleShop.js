import React, {  useEffect, useState } from 'react'

import Error from '../components/Error'
import Loading from '../components/Loading'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

const SingleShop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

 const navigate = useNavigate()
 const dispatch = useDispatch()
  const { id: productId } = useParams()
  const [qty, setQty] = useState(1)
  const {
    data: product,
    isLoading: loading,
    isError: error,
  } = useGetProductDetailsQuery(productId)
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
const addToCartHandler = () => {
  dispatch(addToCart({ ...product, qty }))
  navigate(`/cart`)
}  
  return (
    <div className='section-center'>
      <div className='single-shop-container'>
        <article className='single-shop-img'>
          {product.img.map((image, index) => (
            <img key={index} src={image.url} alt='' className='single-img' />
          ))}
        </article>
        <article className='single-shop-content'>
          <h1 className='single-name'>{product.title}</h1>
          <p className='single-desc'>{product.price}CFA</p>
        </article>
        <div className='single-shop-cart'>
          <div className='col'>
            <div>Status</div>
          </div>
          <div className='col'>
            <strong>{product.countInStock > 0 ? 'En stock' : 'Épuisé'}</strong>
          </div>

          {product.countInStock > 0 && (
            <div>
              <div className='col'>
                <div>Quantity</div>
              </div>
              <div className='col'>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div>
            <button
              type='button'
              className='btn'
              disabled={product.countInStock === 0}
              onClick={addToCartHandler}
            >
              ajouter au painer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleShop
