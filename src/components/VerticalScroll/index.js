import React from 'react'
import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css"

const VerticalScroll = ({ children }) => {
    return (
        <Swiper
            slidesPerView={3}
            direction={'vertical'}          
        >
            <SwiperSlide><h3>Slide 1</h3></SwiperSlide>
            {children}
        </Swiper>
    )
}

export default VerticalScroll
