// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import assets
import canevas from '../../assets/avatars/canevas.jpg'
import fiches from '../../assets/avatars/fiches.jpg'
import filBroder from '../../assets/avatars/filBroder.jpg'
import kit from '../../assets/avatars/kit.jpg'
import mercerie from '../../assets/avatars/mercerie.jpg'
import toiles from '../../assets/avatars/toiles.jpg'

export default () => {
  return (

    <section>
      {/* Section "C'est nouveau" */}
      <div>
        <h1 className='cursiveBig'>C'est nouveau !</h1>
        <p>Broderie et point de croix</p>
      </div>
      <div className='swipers'>
      {/* Slider */}
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // when window width is >= 640px
        320: {
          width: 320,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
  
      <SwiperSlide>
        <div className="card">
          <div className="itemA"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="itemB"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="itemC"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="itemD"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="btton-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="itemE"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    {/* Section "Nos clients adorent + avatars pastels*/}
    <div>
      <h2 className='titleTransition'>Nos clients adorent</h2>
      <div className='gallery3'>
        <div>
          <img src={filBroder} alt="fil à Broder" />
          <p>FIL A BRODER</p>
        </div>
        <div>
          <img src={kit} alt="kit" />
          <p>KIT</p>
        </div>
        <div>
          <img src={fiches} alt="fiches" />
          <p>FICHES</p>
        </div>
        <div>
          <img src={toiles} alt="toiles" />
          <p>TOILES</p>
        </div>
        <div>
          <img src={mercerie} alt="mercerie" />
          <p>MERCERIE</p>
        </div>
        <div>
          <img src={canevas} alt="canevas" />
          <p>CANEVAS</p>
        </div>
      </div>
    </div>
    <div className='swipers'>
    {/* Slider */}
           <h1 className='titleTransition'>Les incontournables de DMC</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // when window width is >= 640px
        320: {
          width: 320,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <div className="card">
          <div className="item1"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Card">
          <div className="item2"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Card">
          <div className="item3"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Card">
          <div className="item4"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="item1"></div>
          <h2>Fleurs Iris - Kit Broderie Traditionnelle - Le Bonheur des Dames</h2>
          <p>26.90€</p>
          <button className="button-ghost-black">Détails</button>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </section>
  );
};