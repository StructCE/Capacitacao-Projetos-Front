import React from 'react'
import { Container } from './styles'
import ScrollContainer from 'react-indiana-drag-scroll'

const HorizontalScroll = ({ children, style }) => {
    return (
        <Container style>
            <ScrollContainer className="container" hideScrollbars>
                {children}
            </ScrollContainer>
        </Container>
    )
}

export default HorizontalScroll
