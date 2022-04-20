import React from 'react'
import logoBlanc from '../../assets/images/logoBlanc.png'
import BlockFooter from './BlockFooter'



function Footer() {


   const blockList1 = ["Parrainage",
    "Conditions Générales de Vente",
    "Fidélisation",
    "Mentions Légales",
    "Transport et Livraisons",
    "Nos coordonnées",
    "Formulaire de rétractation"]

    const blockList2 = ["Parrainage2",
    "Conditions Générales de Vente",
    "Fidélisation",
    "Mentions Légales",
    "Transport et Livraisons",
    "Nos coordonnées",
    "Formulaire de rétractation"]

    const blockList3 = ["Parrainage3",
    "Conditions Générales de Vente",
    "Fidélisation",
    "Mentions Légales",
    "Transport et Livraisons",
    "Nos coordonnées",
    "Formulaire de rétractation"]

    const blockList4 = ["Parrainage4",
    "Conditions Générales de Vente",
    "Fidélisation",
    "Mentions Légales",
    "Transport et Livraisons",
    "Nos coordonnées",
    "Formulaire de rétractation"]
  

  return (
    // Footer 
    <footer className='footer'>
      <div className='footer-links-group'>
        <div className='footer-links'>
          <BlockFooter title="DMC BOUTIQUE" contentList={blockList1}/> 
          <BlockFooter title="Nouveautés" contentList={blockList2} /></div>
        <div className='footer-links'>
          <BlockFooter title="Accessoires Borderie" contentList={blockList3} />
        </div>
        <div className='footer-links'>
          <BlockFooter title="GUIDES UNIVERS BRODERIE" contentList={blockList4} />
          <BlockFooter title="GUIDES UNIVERS BRODERIE" contentList={blockList4} />
        </div>
          
          
        <div className='footer-newsletter'>
          <p>lorem</p>
          <input type="text" />
          <button>ok</button>
        </div>
        </div>
        <img src={logoBlanc} alt="logo blanc"/>
    </footer>
  )
}

export default Footer