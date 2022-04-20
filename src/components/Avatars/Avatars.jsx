import React from 'react'
import fiches from '../../assets/avatars/fiches.jpg'
import filBroder from '../../assets/avatars/filBroder.jpg'
import kit from '../../assets/avatars/kit.jpg'
import mercerie from '../../assets/avatars/mercerie.jpg'
import toiles from '../../assets/avatars/toiles.jpg'

function Avatars() {
  return (
    <div >
      {/* Section "avatars pastels" */}
      <div className='gallery3'>
        <div>
        <img src={filBroder} alt="fil à Broder" />
          <p>Paiement 100% sécurisé</p>
          <p>CB, Paypal</p>
        </div>
        <div>
        <img src={kit} alt="kit" />
          <p>98% de nos clients</p>
          <p>sont satisfaits</p>
        </div>
        <div>
          <img src={fiches} alt="fiches" />
            <p>Livraison gratuite</p>
            <p>Dès 69€ d'achats</p>
        </div>
        <div>
        <img src={toiles} alt="toiles" />
          <p>Points Univers Broderie</p>
          <p>Votre fidélité est récompensée</p>
        </div>
        <div>
        <img src={mercerie} alt="mercerie" />
          <p>Satisfait ou remboursé</p>
          <p>Garantie Univers Broderie</p>
        </div>
  
      </div>

    </div>
  )
}

export default Avatars