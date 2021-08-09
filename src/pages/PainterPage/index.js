import { Container, InfoContainer } from './styles'
import ScrollItem from '../../components/ScrollItem'
import VerticalScroll from '../../components/VerticalScroll'
import placeholder from '../../assets/BaseUserPicture.jpg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

const PainterPage = () => {

    let { id } = useParams()
    const [painter, setPainter] = useState({})

    const handleApiRequests = async () => {
        try {
            const response = await api.get(`/painter/show/${id}`)
            setPainter(response.data)
            console.log(response.data)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        handleApiRequests()
    }, [])

    return (
        <Container>
            <InfoContainer>
                <img src={placeholder} alt="Foto do Artista" />
                <div>
                    <h1>{painter.name}</h1>
                    <span>{painter.born}/{painter.died}</span>
                </div>
                <p>
                    {painter.bio}
                </p>
            </InfoContainer>
            <VerticalScroll>
                {
                    painter.paintings &&
                        painter.paintings.map(painting => {
                            return(
                                <>
                                    <ScrollItem key={painting.id} painting={painting} />
                                    <ScrollItem key={painting.id + "a"} painting={painting} />
                                    <ScrollItem key={painting.id + "b"} painting={painting} />
                                </>
                            )
                        })
                }
            </VerticalScroll>
        </Container>
    )
}

export default PainterPage
