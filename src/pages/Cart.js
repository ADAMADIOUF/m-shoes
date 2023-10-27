import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart, removeFromCart } from '../slices/cartSlice'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate(`/placeorder`)
  }

  return (
    <div className='cart section-center'>
      <div className='cart-content'>
        <h1 style={{ marginBottom: '20px' }}>Panier d'achat</h1>
        {cartItems.length === 0 ? (
          <div className='cart-not-found'>
            Votre panier est vide"
            <Link to={`/boutique`}>Retourner en arrière</Link>
          </div>
        ) : (
          <div className='cart-container'>
            {cartItems.map((item) => (
              <div className='list-group-item' key={item.id}>
                <div className='row'>
                  <div className='cart-img'>
                    {item.img.map((image, index) => {
                      return <img src={image.url} alt='' key={index} />
                    })}
                  </div>
                  <div className='cart-details'>
                    <Link to={`/product/${item.id}`}>
                      <h3>{item.title}</h3>
                    </Link>
                  </div>
                  <div className='cart-price'>{item.price}CFA</div>
                  <div className='col-md-2'>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-md-2'>
                    <button
                      type='button'
                      className='btn btn-light'
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='col-md-4'>
        <div className='cart-total'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <h2>
                Sous-total({cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
                Articles)
              </h2>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              CFA
            </li>
            <li className='list-group-item'>
              <button
                type='button'
                className='btn btn-block btn-dark'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Passer à la caisse
              </button>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Cart
