import React from 'react'
import one from "../../assets/images/1.jpg"
import two from '../../assets/images/2.jpg'
import three from '../../assets/images/3.jpg'
import four from '../../assets/images/4.jpg'
import five from '../../assets/images/5.jpg'
import six from '../../assets/images/6.jpg'

function Gallery() {
  return (
    <section >
      {/* Section "Univers Broderie & vous + avatars Pastels" */}
      <h2 className='titleTransition'>Univers Broderie <span className='cursiveBig'>& vous</span></h2>
      <p>SUR INSTAGRAM</p>
        <br />
      <div className='gallery4'>
        <img src={one} alt="fil à Broder" />
        <img src={two} alt="kit" />
        <img src={three} alt="fiches" />
        <img src={four} alt="toiles" />
        <img src={five} alt="mercerie" />
        <img src={six} alt="mercerie" />
      </div>
      <div>
        <div className='margin'>
          <img className='margin' src="https://www.universbroderie.com/files/14575/_img-design-2021/007-instagram.png" alt="instagram logo" />
          <img className='margin' src="https://www.universbroderie.com/files/14575/_img-design-2021/006-facebook.png" alt="facebook logo" />
        </div>
          <br />
        <p className='italic'>* L'offre promotionnelle sur les produits DMC et Lanarte sont valables du 01/01/2022 au 30/06/2022</p>
          <br />
        <p className='italic'>* l'offre promotionnelle sur les coussins Vervaco est valable du 15/02/2022 au 30/06/2022</p>
      </div>
    </section>
  )
}

export default Gallery