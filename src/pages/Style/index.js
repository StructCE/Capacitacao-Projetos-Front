import {
        Container
} from './style'
import { useState, useEffect } from "react"
import { api } from '../../services/api'
import { useParams, useHistory } from 'react-router-dom'
import HorizontalScroll from '../../components/HorizontalScroll'
import placeholder from '../../assets/Futurismo.jpeg'
import { useUserContext } from '../../hooks/useUserContext'
import { BiPencil } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'

const Style = () => {

    let { id } = useParams()
    const history = useHistory();
    const { user } = useUserContext()

    const [photoURL, setPhotoURL] = useState('');
    const [description, setDescription] = useState('')
    const [styleName, setStylename] = useState('')
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

    const deleteStyle = () => {
        if (window.confirm("Realmente deseja excluir o estilo?")){
                api.delete('style/delete/'+id)
            .then(() => {
                history.push('/')
            })
        }
    }

    return (
        <Container>
            <div className="info-section">
                <img src={photoURL} alt="foto do estilo" />
                <div>
                    <h1>{styleName}</h1>
                    <p>
                        {description}
                    </p>
                    {
                        user && user.is_admin &&
                        <div className="admin-actions">
                            <BiPencil onClick={() => history.push(`/admin/update-style/${id}`)} />
                            <FiTrash2 onClick={deleteStyle} />
                        </div>
                    }
                </div>
            </div>
            <HorizontalScroll paintings={paintings} />
        </Container>
    )
}

export default Style
