import React from 'react'
import truck from '../../assets/svg/truck.svg'

function Banner() {
  return (
   <section>
      <div className="banner">
        <div className="banner-text">
            <h1 className='titleBold'>Nouveauté</h1>
            <br />
            <p className='titleSlim'>Votre premier Amigurumi avec DMC</p>
            <br />
            <button className='button-full'>Je découvre</button>
        </div>
      </div>
      <div>
          <h1 className='titleTransition'>Votre boutique en ligne de broderie et canevas</h1>
          <p>LIVRAISON GRATUITE DÈS 69€ D'ACHATS
            <img src={truck} alt="truck icon"/>
          </p>
      </div>
      <div className='container'>
        <div className="block-left">
            <div className="box-cat">
                <div className="white">
                    <h2 className='titleCard'>PROMO Kits</h2>
                    <p>-20% jusqu'au 30/06/2022 *</p>
                </div>
            </div>   
            <div className="box-chair">
                <div className="white">
                    <h2 className='titleCard'>PROMO Kits</h2>
                    <p>-20% jusqu'au 30/06/2022 *</p>
                </div>
            </div>    
            <div className="double-box">
                <div className="double-white">
                    <h2 className='titleCard'>PROMO Kits</h2>
                    <p>-20% jusqu'au 30/06/2022 *</p>
                </div>
            </div>  
        </div> 
        <div className='block-right'>  
            <div className="box-news">
                <div className="box-white">
                    <img src="https://www.universbroderie.com/files/14575/img/17/logo-illustration-2021.png" alt="" srcset="" />
                            <p className='cursiveBig'>Newsletter</p>
                        <div className="text">
                            <p>Recevez toutes les actualités et les offres
                                <br />
                                Univers Broderie en avant-première
                            </p>
                        </div>
                    <div className='input'>
                        <input type="email" placeholder="E-mail" />
                        <button>OK</button>
                    </div>
                </div> 
            </div>    
                <div className="box-towel">
                    <div className="white">
                        <h2 className='titleCard'>PROMO Kits Broderie Lanarte</h2>
                        <p>-20% jusqu'au 30/06/2022 *</p>
                    </div>
                </div>   
            </div>       
        </div>    
    </section>
  )
}

export default Banner