import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import HorizontalScroll from "../../components/HorizontalScroll"
import { useUserContext } from "../../hooks/useUserContext"
import { api } from "../../services/api"
import { Container, ImageInput } from "./styles"
import placeholder from "../../assets/Home/Consumation.jpg"
import { RiPencilLine } from "react-icons/ri"
import { BiCamera } from 'react-icons/bi'

const GalleryPage = () => {

    const [gallery, setGallery] = useState({})
    const { id } = useParams()
    const { loaded } = useUserContext()
    const history = useHistory()
    const [photo, setPhoto] = useState(null)

    const handleApiRequests = async () => {
        try {
            const response = await api.get(`gallery/show/${id}`)
            console.log(response.data)
            setGallery(response.data)
        } catch(e) {

        }
    }

    const handlePhotoUpload = async (e) => {
        e.preventDefault()

        const formData = new FormData();

		formData.append('photo', photo)

        try {
            await api.post(`/gallery/add_photo/${id}`, formData)
            history.go(0)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        loaded &&
            handleApiRequests()
    }, [loaded])

    return (
        <Container image={
            gallery.image_url ?
            `http://127.0.0.1:3000${gallery.image_url}` : 
            placeholder
        }>
            <div className="top-image">
                <ImageInput onSubmit={handlePhotoUpload}>
                    <label className="custom-file-input">
                        <BiCamera size={48} />
                        <input
                            type="file"
                            onChange={event => setPhoto(event.target.files[0])}
                        />
                    </label>
                    <button type="submit">
                        Mudar de foto
                    </button>
                </ImageInput>
            </div>
            <RiPencilLine onClick={() => history.push(`/user/gallery/${id}/edit`)} />
            <h1>{gallery.name}</h1>
            <HorizontalScroll paintings={gallery.paintings} />
        </Container>
    )
}

export default GalleryPage
