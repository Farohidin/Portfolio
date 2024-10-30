import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

import js from "../assets/images/js.png";
import typesc from "../assets/images/typescript.png"
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import sass from "../assets/images/sass.png"


const Service = () => {
  return (

    <section className="service" id='service'>
      <div className="container">
        <h2 className="title"> Service   </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{

            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide className='service_cards'>
            <div className="service_cards_card">
              <img src={js} alt="" />
              <h2 className="service_cards_title">JavaScript</h2>

            </div>
          </SwiperSlide>
          <SwiperSlide className='service_cards'>
            <div className="service_cards_card">
              <img src="React.png" alt="" />
              <h2 className="service_cards_title">React</h2>

            </div>
          </SwiperSlide>
          <SwiperSlide className='service_cards'>
            <div className="service_cards_card">
              <img src={typesc}alt="" />
              <h2 className="service_cards_title">TypeScript</h2>

            </div>
            </SwiperSlide>
          <SwiperSlide className='service_cards'>
            <div className="service_cards_card">
              <img src={html} alt="" />
              <h2 className="service_cards_title">HTML</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className='service_cards'>
            <div className="service_cards_card">
              <img src={css} alt="" />
              <h2 className="service_cards_title">CSS</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className='service_cards'>
            <div className="service_cards_card">
              <img src={sass} alt="" />
              <h2 className="service_cards_title">SASS</h2>
            </div>
          </SwiperSlide>



        </Swiper>
      </div>

    </section>
  )
}

export default Service