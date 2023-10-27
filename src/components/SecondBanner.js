import React from 'react'
import a from '../assets/b2.png'
const SecondBanner = () => {
  return (
    <div className='banner section-center'>
      <div className='banner-container'>
        <article className='banner-img'>
          <img src={a} alt='' />
          <div className='banner-img-content'></div>
        </article>
        <article className='banner-content'>
          <h1>Découvrez l'Excellence chez M-Shoes</h1>
          <p>
            Bienvenue sur M-Shoes, votre destination pour l'excellence en
            matière de chaussures. Nous sommes heureux de vous accueillir dans
            notre univers de style et de confort. Notre vaste gamme de
            chaussures de qualité est conçue pour satisfaire tous les goûts et
            besoins. Parcourez notre collection pour trouver la paire parfaite
            qui vous fera rayonner.
          </p>
          <p>
            Chez M-Shoes, nous mettons l'accent sur le mariage harmonieux du
            confort, du style et de la qualité. Que vous recherchiez des baskets
            décontractées pour vos aventures quotidiennes, des nu-pieds
            orthopédiques pour prendre soin de vos pieds, ou des chaussures de
            ville élégantes pour des moments spéciaux, nous avons tout ce dont
            vous avez besoin. Profitez pleinement de votre expérience de
            shopping chez M-Shoes !
          </p>
        </article>
      </div>
    </div>
  )
}

export default SecondBanner
