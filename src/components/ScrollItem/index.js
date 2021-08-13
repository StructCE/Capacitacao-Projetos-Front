import React from 'react';
import { Container } from './styles';
import placeholder from '../../assets/placeholder.png';
import { SwiperSlide } from 'swiper/react';


const ScrollItem = ({ painting }) => {
    return (
        <SwiperSlide style={{minWidth: '20rem', minHeight: '20rem'}}>
            <h3>{painting.name}</h3>
            {/*<img 
                src={
                        painting.painting_url ?
                        `http://localhost:3000${painting.painting_url}` 
                        : placeholder
                    }
                alt={painting.name} 
            />*/}
        </SwiperSlide>
    )
}

export default ScrollItem
