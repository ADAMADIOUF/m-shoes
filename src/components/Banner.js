import React from 'react'
import a from "../assets/b1.png"
const Banner = () => {
  return (
    <div className='banner section-center'>
      <div className='banner-container'>
        <article className='banner-content'>
          <h1>Bienvenue sur Notre Site</h1>
          <p>
            Nous sommes ravis de vous accueillir sur notre site Web. Chez nous,
            vous trouverez une large gamme de chaussures de qualité pour tous
            les goûts et besoins. Explorez notre collection et trouvez la paire
            parfaite pour vous.
          </p>
          <p>
            Nos chaussures sont conçues pour allier confort, style et qualité.
            Que vous recherchiez des baskets décontractées, des nu-pieds
            orthopédiques ou des chaussures de ville élégantes, nous avons ce
            qu'il vous faut. Profitez de votre expérience de shopping chez
            M-Shoes !
          </p>
        </article>
        <article className="banner-img">
         <img src={a} alt="" />
         <div className="banner-img-content">

         </div>
        </article>
      </div>
    </div>
  )
}

export default Banner
