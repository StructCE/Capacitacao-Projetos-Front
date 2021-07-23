import React from 'react'
import { Container } from './styles'
import ScrollContainer from 'react-indiana-drag-scroll'

const HorizontalScroll = ({ children }) => {
    return (
        <Container>
            <ScrollContainer className="container">
                {children}
            </ScrollContainer>
        </Container>
    )
}

export default HorizontalScroll
