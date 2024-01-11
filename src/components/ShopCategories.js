import React from 'react'
import a from "../assets/c1.png"
import b from '../assets/c2.png'
import c from '../assets/c3.png'
import d from '../assets/c4.png'
import { Link } from 'react-router-dom'



const ShopCategories = () => {
  return (
    <div className='shop-categories'>
      <div className='section-center'>
        <div className='shop-categories-title'>
          <h2>Acheter par catégorie</h2>
          <p>
            Explorez notre gamme variée de chaussures qui allient la mode et le
            confort.
          </p>
        </div>
        <div className='container-shop-categories'>
          <article className='shop-categories-content'>
            <img src={a} alt='' />

            <Link to={`/boutique/nu-pieds`}>
              <h3>Nu-Pieds</h3>
            </Link>
          </article>

          <article className='shop-categories-content'>
            <img src={b} alt='' />

            <Link to={`/boutique/orthopédiques`}>
              <h3>Chaussures Orthopédiques</h3>
            </Link>
          </article>
          <article className='shop-categories-content'>
            <img src={c} alt='' />

            <Link to={`/boutique/babouches`}>
              <h3>Babouches</h3>
            </Link>
          </article>
          <article className='shop-categories-content'>
            <img src={d} alt='' />

            <Link to={`/boutique/ville`}>
              <h3>Chaussures De Ville</h3>
            </Link>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ShopCategories
