import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
gsap.registerPlugin(PixiPlugin)
const ContactHeader = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)

    const titleAnimation = gsap.fromTo(
      '.contact-header h3',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1 }
    )
    const descriptionAnimation = gsap.fromTo(
      '.contact-header p',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1 }
    )

    const tl = gsap.timeline()

    tl.add(titleAnimation, 0)
    tl.add(descriptionAnimation, 0.5)

    tl.play()
  }, [])
  return (
    <div className={animate ? 'image-animation contact-header' : ''}>
      <div className='header-about-content'>
        <h3>M-Shoes : La Mode à Vos Pieds</h3>
        <p>
          Découvrez notre sélection exceptionnelle de chaussures chez M-Shoes.
          Nous vous proposons une gamme diversifiée de chaussures pour tous les
          styles et occasions. Que vous recherchiez des baskets décontractées,
          des chaussures élégantes de ville, ou des nu-pieds orthopédiques,
          notre collection combine le confort, la qualité, et le style. Trouvez
          la paire parfaite pour compléter votre look chez M-Shoes."
        </p>
      </div>
    </div>
  )
}

export default ContactHeader
