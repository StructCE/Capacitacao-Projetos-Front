import { Container, InfoContainer } from './styles'
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
                <img src={painter.image_url ? `http://localhost:3000${painter.image_url}` : placeholder} alt="Foto do Artista" />
                <div>
                    <h1>{painter.name}</h1>
                    <span>{painter.born}/{painter.died}</span>
                </div>
                <p>
                    {painter.bio}
                </p>
            </InfoContainer>
            <VerticalScroll paintings={painter.paintings}/>
        </Container>
    )
}

export default PainterPage
