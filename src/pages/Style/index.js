import {
        Container,
        Title,
        LeftSector,
        RightSector
} from './style'
import Futurismo from "../../assets/Futurismo.jpeg"
import { useState, useEffect } from "react"
import { api } from '../../services/api'
import { useParams, useHistory } from 'react-router-dom'
import HorizontalScroll from '../../components/HorizontalScroll'

const Style = () => {

    let { id } = useParams()
    const history = useHistory();

    const [photoURL, setPhotoURL] = useState('');
    const [description, setDescription] = useState('')
    const [styleName, setStylename] = useState('')
    const [photo, setPhoto] = useState(null)
    const [tempPhoto, setTempPhoto] = useState(null)

    useEffect (async () => {
      try {	       
        const response = await api.get('style/show/'+id)
        console.log(response)
        if (response.data){
          setPhotoURL("http://127.0.0.1:3333"+response.data.photo_url)
          setDescription(response.data.description)
          setStylename(response.data.name)
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
        </Container>
    )
}

export default Style
