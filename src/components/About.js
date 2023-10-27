import React from 'react'
import AboutHeader from './AboutHeader'
import a from "../assets/about.png"
import b from "../assets/about.mp4"
const About = () => {
  return (
    <div className='about'>
      <AboutHeader />
      <div className='about-content section-center'>
        <div className='about-container'>
          <article className='about-img'>
            <img src={a} alt='' />
          </article>
          <article className='about-details'>
            <h3>M-Shoes Livraison Internationale avec GP</h3>
            <h2>Votre Style, Partout dans le Monde</h2>
            <p>
              Chez M-Shoes, nous sommes ravis de pouvoir vous offrir notre
              élégance Mastour où que vous soyez dans le monde. Pour profiter de
              notre service de livraison internationale, suivez ces étapes
              simples :
            </p>
            <h3>Validez d'abord votre commande à Dakar</h3>
            <p>
              Pour garantir une expérience fluide, nous vous recommandons de
              passer votre commande avec une adresse de livraison à Dakar. Une
              fois votre commande validée, notre équipe se mettra au travail.
            </p>
            <h3>Obtenez un Devis Personnalisé</h3>
            <p>
              Après avoir validé votre commande à Dakar, nous vous enverrons un
              devis pour la livraison internationale en fonction de votre
              destination.
            </p>
            <h3>Contactez notre Service Commercial</h3>
            <p>
              Si vous préférez obtenir des informations sur la livraison
              internationale avant de passer votre commande, n'hésitez pas à
              contacter notre service commercial sur WhatsApp au +221 7777
              30878, ou +221 7833 12735. Notre équipe sera ravie de répondre à
              toutes vos questions et de vous aider à finaliser votre commande.
            </p>
          </article>
        </div>
        <div className='about-container'>
          <article className='about-details'>
            <h3>M-Shoes Livraison Express Avec GP</h3>
            <h2>Votre Style, Livré Rapidement</h2>
            <p>
              Chez M-Shoes, nous sommes fiers de repousser les limites pour vous
              offrir une expérience de shopping inégalée. Pour profiter de notre
              service de livraison express, suivez ces étapes simples:
            </p>
            <h3>Validez Votre Commande en un Instant</h3>
            <p>
              Nous avons simplifié le processus de commande pour que vous
              puissiez obtenir vos chaussures préférées en un rien de temps.
              Choisissez vos articles, validez votre commande, et nous nous
              occupons du reste.
            </p>
            <h3>Livraison Express à Votre Porte</h3>
            <p>
              Nous garantissons une livraison rapide et sécurisée de vos
              chaussures directement à votre porte. Plus d'attente, plus de
              tracas. Votre style est à portée de main.
            </p>
            <h3>Service Client à Votre Écoute</h3>
            <p>
              Besoin d'aide ou d'informations complémentaires ? Notre équipe de
              service client est à votre disposition. Contactez-nous sur
              WhatsApp au +221 7777 30878 ou au +221 7833 12735. Nous sommes là
              pour répondre à toutes vos questions et vous accompagner dans
              votre commande.
            </p>
          </article>

          <article className='about-img'>
            <video width='100%' controls autoPlay>
              <source src={b} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </article>
        </div>
        <div className='last-about'>
          <div>
            <h3>Visitez Notre Boutique</h3>
            <p>
              "Entrez dans notre boutique et explorez une collection élégante de
              chaussures. Découvrez des styles modernes, un confort exceptionnel
              et des chaussures conçues pour vous.
            </p>
          </div>
          <div>
            <button className='btn'>Faire mon Shopping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
