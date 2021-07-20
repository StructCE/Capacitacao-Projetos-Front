import React from 'react'
import ScrollItem from '../ScrollItem'
import { Container } from './styles'
import ScrollContainer from 'react-indiana-drag-scroll'

const HorizontalScroll = () => {
    return (
        <Container>
            <ScrollContainer className="container">
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </ScrollContainer>
        </Container>
    )
}

export default HorizontalScroll
