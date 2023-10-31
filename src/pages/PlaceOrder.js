import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../slices/ordersApiSlice'
import { Link, useNavigate } from 'react-router-dom'
import { clearCartItems } from '../slices/cartSlice'

const PlaceOrder = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessages, setErrorMessages] = useState({})
  const [createOrder] = useCreateOrderMutation()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    setErrorMessages({
      ...errorMessages,
      [name]: '',
    })
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phoneNumber: '',
  })

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const requiredFields = ['name', 'email', 'country', 'phoneNumber']
    const newErrorMessages = {}
    let hasError = false

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrorMessages[field] = 'This field is required'
        hasError = true
      }
    })

    if (hasError) {
      setErrorMessages(newErrorMessages)
      return
    }

    try {
      const orderData = {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        phoneNumber: formData.phoneNumber,
        titles: cartItems.map((item) => item.title),
        totalPrice,
      }

      const response = await createOrder(orderData).unwrap()
      console.log('Reservation sent successfully:', response)

      setSuccessMessage('Réservation envoyée avec succès.')

      setFormData({
        name: '',
        email: '',
        country: '',
        phoneNumber: '',
      })

      setTimeout(() => {
        setSuccessMessage('')
        dispatch(clearCartItems())
      }, 3000)
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation:", error)
      setErrorMessages({
        form: 'Failed to send reservation. Please try again later.',
      })
    }
  }

  

  return (
    <div className='place-order section-center'>
      {successMessage ? (
        <div className='success-message'>{successMessage}</div>
      ) : cartItems.length === 0 ? (
        // Cart content for when the cart is empty
        <div className='cart-content'>
          <h1 style={{ marginBottom: '20px' }}>Panier d'achat</h1>
          <div className='cart-not-found'>
            Votre panier est vide
            <Link to={`/boutique`}>Retourner en arrière</Link>
            <p>M-SHOES nous vous contactrons le plus vite possible</p>
          </div>
        </div>
      ) : (
        <div className='place-order-container'>
          <article className='form-order'>
            <div className='order-form '>
              <form onSubmit={handleSubmit} className='form-content'>
                <div className='order-input'>
                  <label htmlFor='name'>prénom :</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errorMessages.name && (
                    <p className='error-message'>{errorMessages.name}</p>
                  )}
                </div>
                <div className='order-input'>
                  <label htmlFor='email'>E-mail :</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errorMessages.email && (
                    <p className='error-message'>{errorMessages.email}</p>
                  )}
                </div>
                <div className='order-input'>
                  <label htmlFor='number'>phone number :</label>
                  <input
                    type='text'
                    id='number'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  {errorMessages.phoneNumber && (
                    <p className='error-message'>{errorMessages.phoneNumber}</p>
                  )}
                </div>
                <div className='order-input'>
                  <label htmlFor='country'>Country :</label>
                  <input
                    type='text'
                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                  {errorMessages.country && (
                    <p className='error-message'>{errorMessages.country}</p>
                  )}
                </div>
                {cartItems.map((item, index) => (
                  <div className='order-input' key={index}>
                    <label htmlFor={`title-${index}`}>nom du produit:</label>
                    <input
                      type='text'
                      id={`title-${index}`}
                      name={`title-${index}`}
                      value={item.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
                <div className='order-input'>
                  <label htmlFor='totalPrice'>prix total CFA:</label>
                  <input
                    type='text'
                    id='totalPrice'
                    name='totalPrice'
                    value={totalPrice}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type='submit' className='btn btn-order'>
                  commander
                </button>
              </form>
            </div>
          </article>
          <article className='form-order-details'>
            <h1>Votre Commande</h1>

            <h2>panier Information:</h2>
            <div className='order-desc'>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <h3>{item.title} - </h3>
                  <h3>{item.price}CFA - </h3>
                  <h3>Quantity: {item.qty}</h3>
                </div>
              ))}
            </div>
            <h2>prix total: {totalPrice.toFixed(2)} CFA</h2>
            <h3>paiement à la livraison</h3>
            <p>payer en argent comptant à la livraison</p>
          </article>
        </div>
      )}
    </div>
  )
}

export default PlaceOrder;
