import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styles';
import placeholder from '../../assets/placeholder.png';

// Swiper
import "swiper/swiper.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


const VerticalScroll = ({ paintings }) => {
    return (
        <Container>
            <Swiper
                slidesPerView={3}
                direction={'vertical'}
                grabCursor
                loop
                spaceBetween={30}
            >
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.painting_url ?
                            `http://localhost:3000${painting.painting_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.painting_url ?
                            `http://localhost:3000${painting.painting_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.painting_url ?
                            `http://localhost:3000${painting.painting_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.painting_url ?
                            `http://localhost:3000${painting.painting_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.painting_url ?
                            `http://localhost:3000${painting.painting_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.painting_url ?
                            `http://localhost:3000${painting.painting_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
            </Swiper>
        </Container>
    )
}

export default VerticalScroll
