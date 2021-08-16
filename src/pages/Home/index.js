import { useEffect, useState } from 'react'
import { ImageSection, Container, ScrollSection } from './styles'
import Savage from '../../assets/Home/Savage.jpg'
import Consumation from '../../assets/Home/Consumation.jpg'
import Destruction from '../../assets/Home/Destruction.jpg'
import Desolation from '../../assets/Home/Desolation.jpg'
import HorizontalScroll from '../../components/HorizontalScroll'
import { api } from '../../services/api'

const Home = () => {

    const [painters, setPainters] = useState([])
    const [styles, setStyles] = useState([])
    const [paintings, setPaintings] = useState([])

    const handleApiRequests = async () => {
        try {
            const response = await api.get('/painter/index')
            setPainters(response.data)
            console.log(response.data)
            const temp = await api.get('/style/index')
            setStyles(temp.data)
            console.log(temp.data)
            const tmp = await api.get('/paintings/index')
            setPaintings(tmp.data)
            console.log(tmp.data)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        handleApiRequests()
    }, [])
    
    return (
        <Container>
            <ImageSection image={Savage}>
                <div className="top-bar"></div>
                <div className="middle">
                    <h1>la Voûte des Couleurs</h1>
                </div>
                <div className="bottom-bar"></div>
            </ImageSection>
            <p className="intro-text">
                la Voûete des Couleurs é a sua galeria digital!
                Temos inúmeras pinturas em altíssima qualidade,
                além de conteúdos educativos para te ajudar a
                aprender sobre seus artistas, estilos e pinturas
                favoritos! Venha conosco nessa jornada!
            </p>
            <ImageSection image={Consumation}>
                <div className="top-bar"></div>
                <div className="middle"></div>
                <div className="bottom-bar"></div>
            </ImageSection>
            <ScrollSection id="painters">
                <h2>Nossos Artistas</h2>
                <HorizontalScroll paintings={painters} />
            </ScrollSection>
            <ImageSection image={Destruction}>
                <div className="top-bar"></div>
                <div className="middle"></div>
                <div className="bottom-bar"></div>
            </ImageSection>
            <ScrollSection id="styles">
                <h2>Nossos Estilos</h2>
                <HorizontalScroll paintings={styles} />
            </ScrollSection>
            <ImageSection image={Desolation}>
                <div className="top-bar"></div>
                <div className="middle"></div>
                <div className="bottom-bar"></div>
            </ImageSection>
            <ScrollSection id="paintings">
                <h2>Nossas pinturas</h2>
                <HorizontalScroll paintings={paintings} />
            </ScrollSection>
        </Container>
    )
}

export default Home
