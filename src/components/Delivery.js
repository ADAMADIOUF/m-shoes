import React from 'react'
import { FaMotorcycle, FaClock, FaCheckCircle } from 'react-icons/fa'

const Delivery = () => {
  return (
    <div className='delivery-container section-center'>
      <div className='delivery-item'>
        <span>
          <FaMotorcycle className='icon' />
        </span>
        <h3>Livraison Rapide</h3>
        <p>
          Nous assurons une livraison rapide et fiable de vos commandes,
          directement à votre porte.
        </p>
      </div>

      <div className='delivery-item'>
        <span>
          <FaClock className='icon' />
        </span>

        <h3>Service 24/7</h3>
        <p>
          Notre équipe est disponible 24 heures sur 24, 7 jours sur 7, pour
          répondre à vos besoins en tout temps.
        </p>
      </div>

      <div className='delivery-item'>
        <span>
          {' '}
          <FaCheckCircle className='icon' />
        </span>

        <h3>Qualité Garantie</h3>
        <p>
          Nos produits sont de la plus haute qualité, pour vous offrir une
          expérience inégalée.
        </p>
      </div>
    </div>
  )
}

export default Delivery
