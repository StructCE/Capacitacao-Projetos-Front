import React from 'react';
import { Container } from './styles';
import placeholder from '../../assets/placeholder.png';
import { SwiperSlide } from 'swiper/react';


const ScrollItem = ({ painting }) => {
    return (
        <SwiperSlide>
            <Container image={painting.painting_url ? `http://localhost:3000${painting.painting_url}` : placeholder}>
                <div>
                    <h3>{painting.name}</h3>
                </div>
            </Container>
        </SwiperSlide>
    )
}

export default ScrollItem
