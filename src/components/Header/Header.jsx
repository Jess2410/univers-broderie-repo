import React from 'react'
// import './Home.css'
import star from '../../assets/svg/star.svg'
import search from '../../assets/svg/search.svg'
import heart from '../../assets/svg/heart.svg'
import user from '../../assets/svg/user.svg'
import cart from '../../assets/svg/cart.svg'

function Header() {
  return (
    //   Header
       <header>
            <div className="top-header">
                    <span>Livraison offerte dès 69€ d'achats</span>
                    <div className='line'>   
                        <div  className="stars" > 
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>     
                        <span style={{ marginRight:"1rem", fontSize:"0.5rem" }}>(20123)</span>    
                        <span>98% de nos clients sont satisfaits</span>   
                    </div>
                    <span>Contactez-nous au 02 35 28 17 21 ou par mail</span>
                </div>
            <div className="bottom-header">
                <div className="inputStyle">
                    <input className="inputRemove" type="text" placeholder="Rechercher"/>
                    <img src={search} alt="search icon"/>
                </div>
                <div className="logo">
                    <img src="https://www.universbroderie.com/Files/14575/Img/21/logo-v2.png" alt="logo"/>
                </div>
                <div className="actions">
                    <div className="fav">
                        <img src={heart} alt="heart icon"/>
                        <span className='fav-span'>Favoris</span>
                    </div>
                    <div className="connect">
                        <img src={user} alt="user icon"/>
                        <span>CONNEXION</span>
                    </div>
                    <div className="cart">
                        <img src={cart} alt="cart icon"/>
                        <span>0,00€</span>
                    </div>
                </div>
              </div>
    {/* Navbar */}
              <nav className='nav'>
                <ul className='nav-list'>
                    <li className='cursive'><a href='#'>Nouveautés</a></li>
                    <li><a href='#'>Kits</a></li>
                    <li><a href='#'>Fiches</a></li>
                    <li><a href='#'>Fils</a></li>
                    <li><a href='#'>Toile</a></li>
                    <li><a href='#'>Accessoires</a></li>
                    <li><a href='#'>Supports à broder</a></li>
                    <li><a href='#'>Crochet</a></li>
                    <li><a href='#'>Mercerie</a></li>
                    <li><a href='#'>Canevas</a></li>
                    <li><a href='#'>Coussins</a></li>
                    <li><a href='#'>Kits d'enfants</a></li>
                    <li><a href='#'>Déstockage</a></li>
                </ul>
              </nav>         
    </header>
  )
}

export default Header
