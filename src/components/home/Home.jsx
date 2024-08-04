import React from 'react'
import './home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";


import image_1 from '../../images/image_1.jpeg'
import image_2 from '../../images/image_2.jpeg'
import image_3 from '../../images/image_3.jpeg'
import image_4 from '../../images/image_4.jpeg'
import image_5 from '../../images/image_5.jpeg'
import image_6 from '../../images/image_6.jpeg'
import image_7 from '../../images/image_7.jpeg'
import image_8 from '../../images/image_8.jpeg'

const Home = () => {
  return (
    <div className="gallery-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        speed={900}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        // navigation={{ clickable: false }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        {[
          image_1,
          image_2,
          image_3,
          image_4,
          image_5,
          image_6,
          image_7,
          image_8
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} className='swiper-images'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home