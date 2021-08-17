import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, Painter, Style } from './styles'

const PaintingPage = () => {
    let { id } = useParams()

    const [painting, setPainting] = useState({})

    const handleApiRequest = async () => {
        try {
            const response = await api.get(`/paintings/show/${id}`)
            console.log(response.data)
            setPainting(response.data)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        handleApiRequest()
    }, [])

    return (
        <Container image={painting.image_url}>
            <div className="initial-area"></div>
            <div className="info-area">
                <div className="transition"></div>
                <div className="rest">
                    <h1>{painting.name}</h1>
                    <p>
                        {painting.description}
                    </p>
                    <div className="bottom">
                        <Painter image={painting.painter && painting.painter.image_url}>
                            <span>Feito por:</span>
                            <h3>{painting.painter &&
                                painting.painter.name
                            }</h3>
                        </Painter>
                        <div className="center-div">
                            <span>completado em:</span>
                            <span className="time">{painting.time_of_completion}</span>
                        </div>
                        <Style image={painting.style && painting.style.image_url}>
                            <span>Uma parte do:</span>
                            <h3>{painting.style &&
                                painting.style.name
                            }</h3>
                        </Style>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PaintingPage
