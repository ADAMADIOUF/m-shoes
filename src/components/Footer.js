import React from 'react'
import{AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container section-center'>
        <article className='footer-content'>
          <h3>a props de nous</h3>
          <p>
            Nous avons simplifié le processus de commande pour que vous puissiez
            obtenir vos chaussures préférées en un rien de temps. Choisissez vos
            articles, validez votre commande, et nous nous occupons du reste.
          </p>
          <article className='top-nav-links'>
            <span>
              <a
                href='https://www.facebook.com/profile.php?id=61552006883679'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillFacebook />
              </a>
            </span>
            <span>
              <a
                href='https://www.instagram.com/khadiscuisine/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillInstagram />
              </a>
            </span>
            <span>
              <a
                href='https://twitter.com/KhadisCuisine'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillTwitterSquare />
              </a>
            </span>
          </article>
        </article>
        <article className='footer-content'>
          <h3>notre boutique</h3>
          <p>keur massar</p>
          <p>Parcelles Assainies unité 6 à coté du rond point case</p>
          <p>Tel:+221 7777 30878</p>
          <p>Tel:+221 7833 12735</p>
        </article>
      </div>
      <p className='footer-date'>
        © {new Date().getFullYear()} adamadiouf. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
