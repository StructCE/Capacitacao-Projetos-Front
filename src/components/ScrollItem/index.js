import React from 'react';
import { Container } from './styles';
import painting from '../../assets/FuturistPainting.png';

const ScrollItem = () => {
    return (
        <Container image={painting}>
            <div>
                <h3>Pintura futurista</h3>
            </div>
        </Container>
    )
}

export default ScrollItem