import React from 'react'
import ContactHeader from './ContactHeader'

const Contact = () => {
  return (
    <div className='contact'>
      <ContactHeader />
      <div className='contact-container'>
        <h1>Contact M-Shoes</h1>
        <p>
          If you have any questions or need further information, please feel
          free to contact us:
        </p>
        <div className='contact-info'>
          <p>
            <strong>Email:</strong> contact@m-shoes.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Address:</strong> 123 Shoe Street, Shoe City, SH 12345
          </p>
        </div>
        <p>We look forward to hearing from you!</p>
      </div>
    </div>
  )
}

export default Contact
