import React from 'react';

import VueCinema from "../assets/images/VueSinema.png";
import Nike from "../assets/images/Nike.png";
import Time from "../assets/images/Time.png";
import Asinc from "../assets/images/Asinc.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay, EffectCube, Pagination } from 'swiper/modules';



const Work = () => {
  return (
    <>
    <div className="container">
    <h2 className="title wtitle">Work</h2>
    </div>
    <section className="work" id='Work'>
      <div className="container">
     
        <div className="work_box">
       
        <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        autoplay={{
          
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper work__MySwiper"
      >
        <SwiperSlide>
        <a href="https://farohidin.github.io/Time/" target='blank'><img className='work__img' src={Time} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://farohidin.github.io/Vuecinema/" target='blank'><img className='work__img'  src={VueCinema} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://farohidin.github.io/Nike/" target='blank'>
          <img className='work__img'  src={Nike} alt="" />
          
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://farohidin.github.io/Asynchronnost/" target='blank'><img className='work__img'  src={Asinc} alt="" /></a>

        </SwiperSlide>
      </Swiper>
          
        </div>
      </div>
    </section>
    </>
  );
}

export default Work;




// ""
// "https://farohidin.github.io/Vuecinema/"
// ""
// "" 
{/* <div className="work_box_card">
<a href="https://farohidin.github.io/Time/" target='blank'><img src={Time} alt="" /></a>
</div>
<div className="work_box_card">
<a href="https://farohidin.github.io/Vuecinema/" target='blank'><img src={VueCinema} alt="" /></a>
</div>
<div className="work_box_card">
<a href="https://farohidin.github.io/Nike/" target='blank'><img src={Nike} alt="" /></a>
</div>
<div className="work_box_card">
<a href="https://farohidin.github.io/Asynchronnost/" target='blank'><img src={Asinc} alt="" /></a>
</div> */}