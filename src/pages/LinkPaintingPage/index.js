import { useHistory, useParams } from "react-router-dom"
import { Container, GalleryItem } from "./styles"
import { useUserContext } from "../../hooks/useUserContext"
import placeholder from '../../assets/BaseUserPicture.jpg';
import { api } from "../../services/api";
import { useEffect, useState } from "react";

const LinkPaintingPage = () => {

    let { id } = useParams()
    const { user } = useUserContext()
    const history = useHistory()
    const [painting, setPaiting] = useState({})

    const handleApiRequest = async () => {
        try {
            const response = await api.get(`/paintings/show/${id}`)
            setPaiting(response.data)
            console.log(response.data)
        } catch(e) {
            console.log(e)
        }
    }

    const handleChoice = async (galleryId) => {
        try {
            const response = await api.post('/gallery/link_painting', {
                gallery_id: galleryId,
                painting_id: id
            })
            response &&
                history.push(`/user/gallery/${galleryId}`)
        } catch(e){
            alert(e)
        }
    }

    useEffect(() => {
        handleApiRequest()
    }, [])

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Selceione a Galeria à qual você deseja adicioanar {painting.name}</h1>
            <Container>
                {  
                    user &&
                    user.galleries &&
                    user.galleries.map(gallery =>
                        <GalleryItem 
                            key={gallery.id} 
                            image={
                                gallery.image_url ?
                                `http://127.0.0.1:3000${gallery.image_url}` : 
                                placeholder
                            }
                            onClick={() => handleChoice(gallery.id)}
                        >
                            <div><h3>{gallery.name}</h3></div>
                        </GalleryItem>
                    )
                }
            </Container>
        </>
    )
}

export default LinkPaintingPage
