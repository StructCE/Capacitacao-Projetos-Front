import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, Painter, Style } from './styles'
import { FiCheck, FiPlus, FiTrash2 } from 'react-icons/fi'
import { useUserContext } from '../../hooks/useUserContext'
import { BiCamera, BiPencil } from 'react-icons/bi'

const PaintingPage = () => {
    let { id } = useParams()

    const [painting, setPainting] = useState({})
    const { user } = useUserContext()
    const history = useHistory()
    const [photo, setPhoto] = useState(null)

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

    const handlePhotoUpload = async (e) => {
        e.preventDefault()

        const fd = new FormData()
        fd.append('picture', photo)

        try {
            const response = await api.post(`paintings/update_picture/${id}`, fd)
            setPainting(response.data)
            console.log(response.data)
        } catch(e) {
            alert(e)
        }
    }

    const handleDelete = async () => {
        try {
            await api.delete(`paintings/delete/${id}`)
            history.go(1)
        } catch(e) {
            alert(e)
        }
    }

    return (
        <Container image={painting.image_url}>
            <div className="initial-area"></div>
            <div className="info-area">
                <div className="transition"></div>
                <div className="rest">
                    {
                        user &&
                        <div className="action-div">
                            {
                                user.is_admin &&
                                <>
                                    <FiTrash2 onClick={handleDelete} />
                                    <BiPencil onClick={() => history.push(`/admin/painting/${id}/edit`)} />
                                    <form onSubmit={handlePhotoUpload}>
                                        <label>
                                            <input 
                                                type='file'
                                                onChange={event => setPhoto(event.target.files[0])}
                                            />
                                            <BiCamera />
                                        </label>
                                        {
                                            photo &&
                                            <label>
                                                <input type='submit' />
                                                <FiCheck />
                                            </label>
                                        }
                                    </form>
                                </>
                            }
                            <FiPlus onClick={() => history.push(`/painting/${painting.id}/link`)} />
                        </div>
                    }
                    <h1>{painting.name}</h1>
                    <p>
                        {painting.description}
                    </p>
                    <div className="bottom">
                        <Painter
                            image={painting.painter && painting.painter.image_url}
                            onClick={() => painting.painter && history.push(`/painter/${painting.painter.id}`)}
                        >
                            <span>Feito por:</span>
                            <h3>{painting.painter &&
                                painting.painter.name
                            }</h3>
                        </Painter>
                        <div className="center-div">
                            <span>completado em:</span>
                            <span className="time">{painting.time_of_completion}</span>
                        </div>
                        <Style
                            image={painting.style && painting.style.image_url}
                            onClick={() => painting.style && history.push(`/style/${painting.style.id}`)}
                        >
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
