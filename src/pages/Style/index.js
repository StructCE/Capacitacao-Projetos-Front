import {
        Container,
        Title,
        LeftSector,
        RightSector
} from './style'
import { useState, useEffect } from "react"
import { api } from '../../services/api'
import { useParams, useHistory } from 'react-router-dom'
import HorizontalScroll from '../../components/HorizontalScroll'
import placeholder from '../../assets/Futurismo.jpeg'

const Style = () => {

    let { id } = useParams()
    const history = useHistory();

    const [photoURL, setPhotoURL] = useState('');
    const [description, setDescription] = useState('')
    const [styleName, setStylename] = useState('')
    const [photo, setPhoto] = useState(null)
    const [tempPhoto, setTempPhoto] = useState(null)
    const [paintings, setPaintings] = useState([])

    useEffect (async () => {
      try {	       
        const response = await api.get('style/show/'+id)
        console.log(response)
        if (response.data){
          setPhotoURL(
                response.data.image_url ? 
                "http://127.0.0.1:3000"+response.data.image_url :
                placeholder
            )
          setDescription(response.data.description)
          setStylename(response.data.name)
          setPaintings(response.data.paintings)
        }
    } catch(e){
        alert("Erro, tente novamente")
        history.push("/")
    }
    }, [])

    



    return (
        <Container>
            <Title>{styleName}</Title>
                <LeftSector>
                    <img src={photoURL} alt={"obra "+styleName} />
                </LeftSector>
                <RightSector>
                    <p>{description}</p>
                </RightSector>
                <HorizontalScroll paintings={paintings} />
        </Container>
    )
}

export default Style
