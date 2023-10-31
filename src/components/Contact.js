import React from 'react'
import ContactHeader from './ContactHeader'

const Contact = () => {
  return (
    <div className='contact'>
      <ContactHeader />
      <div className='contact-container section-center'>
        <h1>Contactez M-Shoes</h1>
        <p>
          Si vous avez des questions ou avez besoin de plus d'informations,
          n'hésitez pas à nous contacter :
        </p>
        <div className='contact-info'>
          <p>
            <strong>Email:</strong> contact@m-shoes.com
          </p>
          <p>
            <strong>Phone:</strong> +221 7777 30878
          </p>
          <p>
            <strong>Address:</strong> Parcelles Assainies unité 6 à coté du rond
            point case
          </p>
        </div>
        <p>Nous sommes impatients d'avoir de vos nouvelles !</p>
      </div>
    </div>
  )
}

export default Contact
