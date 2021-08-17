import { Container, InfoContainer } from './styles'
import VerticalScroll from '../../components/VerticalScroll'
import placeholder from '../../assets/BaseUserPicture.jpg'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import Button from '../../components/Button'
import { BiCamera } from 'react-icons/bi'
import { useUserContext } from '../../hooks/useUserContext'
import { RiPencilLine } from 'react-icons/ri'
import { FiTrash2 } from 'react-icons/fi'

const PainterPage = () => {

    let { id } = useParams()
    const [painter, setPainter] = useState({})
    const [photo, setPhoto] = useState(null)
    const { user } = useUserContext()
    const history = useHistory()

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

    const handlePhotoUpload = async (e) => {
        e.preventDefault()

        const fd = new FormData()
        fd.append('picture', photo)

        try {
            const response = await api.post('/painter/update_picture/'+id, fd)
            setPainter(response.data)
            console.log(response.data)
        } catch(e) {

        }
    }

    const handleDeletePainter = async () => {
        try {
            await api.delete(`/painter/delete/${id}`)
            history.push('/')
        } catch(e) {

        }
    }

    return (
        <Container>
            <InfoContainer>
                {
                    user && user.is_admin &&
                    <form onSubmit={handlePhotoUpload}>
                        <label>
                            <BiCamera size={58} />
                            <input 
                                type="file"
                                onChange={event => setPhoto(event.target.files[0])}
                            />
                        </label>
                        <Button type="submit">Mudar Foto</Button>
                    </form>
                }
                <img 
                    src={painter.image_url ? 
                    `http://localhost:3000${painter.image_url}` : 
                    placeholder} alt="Foto do Artista" 
                />
                <div>
                    <h1>{painter.name}</h1>
                    <span>{painter.born}/{painter.died}</span>
                    {user && user.is_admin && 
                        <div className="admin-actions">
                            <RiPencilLine onClick={() => history.push(`/admin/painter/${id}/edit`)} />
                            <FiTrash2 onClick={handleDeletePainter} />
                        </div>
                    }
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
