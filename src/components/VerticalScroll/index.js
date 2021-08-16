import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styles';
import placeholder from '../../assets/placeholder.png';

// Swiper
import "swiper/swiper.min.css"
import { useHistory } from 'react-router-dom';

const HorizontalScroll = ({ paintings }) => {

    const history = useHistory()

    return (
        <Container>
            <Swiper
                slidesPerView={3}
                grabCursor
                loop
                spaceBetween={30}
                direction={'vertical'}
            >
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div onClick={() => history.push(`/${painting.type}/${painting.id}`)}>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.image_url ?
                            `http://localhost:3000${painting.image_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div onClick={() => history.replace(`/${painting.type}/${painting.id}`)}>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.image_url ?
                            `http://localhost:3000${painting.image_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div onClick={() => history.replace(`/${painting.type}/${painting.id}`)}>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.image_url ?
                            `http://localhost:3000${painting.image_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
                {
                    paintings &&
                    paintings.map(painting =>
                    <SwiperSlide key={painting.id}>
                        <div onClick={() => history.replace(`/${painting.type}/${painting.id}`)}>
                            <h3>{painting.name}</h3>
                        </div>
                        <img src={
                            painting.image_url ?
                            `http://localhost:3000${painting.image_url}` 
                            : placeholder
                        }/>
                    </SwiperSlide>)
                }
            </Swiper>
        </Container>
    )
}

export default HorizontalScroll
