import React from 'react';
import { Container } from './styles';
import placeholder from '../../assets/placeholder.png';

const ScrollItem = ({ painting }) => {
    return (
        <Container image={painting.painting_url ? `http://localhost:3000${painting.painting_url}` : placeholder}>
            <div>
                <h3>{painting.name}</h3>
            </div>
        </Container>
    )
}

export default ScrollItem
