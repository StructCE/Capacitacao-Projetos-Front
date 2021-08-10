import React from 'react'
import { Container } from './styles'
import { Swiper } from 'swiper/react';

const VerticalScroll = ({ children, style }) => {
    return (
        <Container style>
            <Swiper
                className="container"
                slidesPerView={3}
                direction={'vertical'}          
            >
                {children}
            </Swiper>
        </Container>
    )
}

export default VerticalScroll
