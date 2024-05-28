import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Videoslider = ({id , title, videos}) => {
  return (
    <section id={id}>
        <h2>{title}</h2>
        <div className='video__slider'>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper-${id}`}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((video,key) =>{
            return (
              <SwiperSlide className='video' key={key}>
                    <div className='video__thumb play__icon'>
                      <Link to={`/video/${video.videoId}`}>
                          <img src={video.img} alt={video.title} />
                      </Link>
                    </div>
                    <div className='video__text'>
                      <Link to={`/video/${video.videoId}`}>
                        <p>{video.title}</p>
                      </Link>
                    </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
    </section>
  )
}

export default Videoslider