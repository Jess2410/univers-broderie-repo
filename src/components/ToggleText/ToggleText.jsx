import React, {useState} from 'react'

function ToggleText() {
    
const [toggleText, setToggleText] = useState(true)


const toggleFunction = () => {
    setToggleText(!toggleText)
}


let toggledText;

if(toggleText){

    toggledText =   
    <div> 
        <button className='button-ghost'>A PROPOS</button>
        <button className='button-ghost' onClick={toggleFunction}>INCONTOURNABLE DMC</button>
        <p>Univers Broderie est ravie de vous accompagner depuis 2002 dans la création de vos broderies que vous soyez <b className='bold'>débutants ou brodeurs expérimentés</b>. Nous vous proposons sur notre boutique <b className='bold'>tous les indispensables de vos travaux</b> comme les toiles à broder (Aïde 5, étamine lugana, lin à broder... ), les indétronables fils DMC ou encore des aiguilles à broder. S'ajoutent à cela nos nombreux kits à broder, fiches broderie et multiples supports à broder. 
        </p>
        <p>Notre expérience dans la broderie, nous permet de travailler avec les <b className='bold'>meilleures marques et créateurs</b> du secteur que nous sommes ensuite ravis de vous partager.
        </p>
        <p>Nous restons à l'affût de toutes les <b className='bold'>nouvelles tendances</b> mais aussi de vos besoins. Vous trouverez ainsi de <b className='bold'>nombreuses nouveautés</b> régulièrement sur notre site, de quoi satisfaire votre âme de brodeur ! </p>
            
    </div>
}else{
    toggledText =   
    <div>
        <button className='button-ghost' onClick={toggleFunction}>A PROPOS</button>
        <button className='button-ghost'>INCONTOURNABLE DMC</button>
        <p>Vous trouverez sur notre boutique un <b className='bold'>large choix de matériel et accessoires indispensables à petits prix</b> comme les Fils Moulinés DMC à partir de 0.99€ seulement l'échevette ! Un fil incontournable pour la broderie au point de croix, broderie traditionnelle mais aussi canevas. Vous ne savez pas quels fils choisir ? Optez pour le nuancier DMC Mouliné avec échantillons de fil art. 117MC W100B gamme 2017, une carte de couleur indispensable pour choisir vos coloris. 
          <br />
        Pour bien utiliser et ranger vos échevettes de fils, pensez aux cartes en plastiques et archets DMC. Les Cartes en plastique 6102 DMC (lot de 28) vous permettront de ranger vos échevettes en les enroulant autour de la carte. Vous pourrez également y inscrire le numéro du fil. Quant aux archets DMC GC001 (paquet de 10), il s'agit d'un article très astucieux ! Il vous permet, une fois l'échevette montée sur l'archet, de dérouler facilement le fil à la longueur voulue. Ainsi pas de risque d'égarer le numéro de couleur. 
          <br />
        Enfin, ne passez pas à cotés des aiguilles à tapisseries point de croix n°26 de DMC (paquet de 5 aiguilles). Ces aiguilles bout rond sont recommandées par DMC pour la broderie point de croix. 
        </p>
    </div>
}

  return (


    <div className='container--toggle'>
        <div className='toggle-text'>
          <img src="https://www.universbroderie.com/Files/14575/Img/21/logo-v2.png" alt="logo"/>
          <h2 className='cursiveBig'>Tout le nécessaire pour broder depuis 2002 </h2>
            <br />
          {toggledText}
        </div>
    </div>
  )
}

export default ToggleText