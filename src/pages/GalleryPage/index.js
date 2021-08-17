import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HorizontalScroll from "../../components/HorizontalScroll"
import { useUserContext } from "../../hooks/useUserContext"
import { api } from "../../services/api"
import { Container } from "./styles"
import placeholder from "../../assets/Home/Consumation.jpg"

const GalleryPage = () => {

    const [gallery, setGallery] = useState({})
    const { id } = useParams()
    const { loaded } = useUserContext()

    const handleApiRequests = async () => {
        try {
            const response = await api.get(`gallery/show/${id}`)
            console.log(response.data)
            setGallery(response.data)
        } catch(e) {

        }
    }

    useEffect(() => {
        loaded &&
            handleApiRequests()
    }, [loaded])

    return (
        <Container image={
            gallery.image_url ?
            `http:127.0.0.1:3000${gallery.image_url}` : 
            placeholder
        }>
            <div className="top-image"></div>
            <h1>{gallery.name}</h1>
            <HorizontalScroll paintings={gallery.paintings} />
        </Container>
    )
}

export default GalleryPage
