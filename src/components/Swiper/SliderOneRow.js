import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function SliderOneRow() {

    const nextEl = useRef(null);
    const prevEl = useRef(null);

    return (
        <div className='content'>
            <div className='button'>
                <div ref={prevEl} className="swiper-button-prev"> p </div>
                <div ref={nextEl} className="swiper-button-next"> n </div>
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={
                    {
                        nextEl: nextEl.current,
                        prevEl: prevEl.current,
                    }
                }
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </div>
    );
}

export default SliderOneRow;