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
                slidesPerView={1}
                grabCursor
                loop
                spaceBetween={10}
                centeredSlides
                breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    }
                }}
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
                        }
                        alt={painting.name}
                        />
                    </SwiperSlide>)
                }
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
                        }
                        alt={painting.name}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </Container>
    )
}

export default HorizontalScroll
