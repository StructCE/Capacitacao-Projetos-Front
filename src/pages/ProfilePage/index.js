import { useUserContext } from "../../hooks/useUserContext";
import {
    InformationContainer,
    ImageInput,
    GalleryContainer,
    GalleryItem
} from "./styles";
import placeholder from '../../assets/BaseUserPicture.jpg';
import { BiCamera } from 'react-icons/bi'
import { useState } from "react";
import { api } from "../../services/api";
import { RiPencilLine } from "react-icons/ri"
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";

const ProfilePage = () => {

    const { user, refreshUser } = useUserContext()
    const [photo, setPhoto] = useState(null)

    const history = useHistory()

    const handlePhotoUpload = async (e) => {
        e.preventDefault()

        const formData = new FormData();

		formData.append('photo', photo)

        try {
            await api.post('/user/photo_upload', formData)
            refreshUser()
        } catch(e) {
            console.error(e)
        }
    }

    return (
        <>
            {
                user ?
                <>
                    <InformationContainer>
                        <div>
                            <ImageInput onSubmit={handlePhotoUpload}>
                                <label className="custom-file-input">
                                    <BiCamera size={36} />
                                    <input
                                        type="file"
                                        onChange={event => setPhoto(event.target.files[0])}
                                    />
                                </label>
                                <button type="submit">
                                    Mudar de foto
                                </button>
                            </ImageInput>
                            <img src={!user.user_photo ? placeholder : `http://127.0.0.1:3000${user.user_photo}`} alt="Foto de perfil" />
                        </div>
                        <div className="info">
                            <Link to="/user/edit">
                                <RiPencilLine />
                            </Link>
                            <h3>{user.name}</h3>
                            <span>{user.email}</span>
                        </div>
                    </InformationContainer>
                    <GalleryContainer>
                        <div className="gallery-wraper">
                            {
                                user.galleries &&
                                user.galleries.map(gallery =>
                                    <GalleryItem 
                                        key={gallery.id} 
                                        image={
                                            gallery.image_url ?
                                            `http://127.0.0.1:3000${gallery.image_url}` : 
                                            placeholder
                                        }
                                        onClick={() => history.push(`/user/gallery/${gallery.id}`)}
                                    >
                                        <div><h3>{gallery.name}</h3></div>
                                    </GalleryItem>
                                )
                            }
                        </div>
                        <Button onClick={() => history.push('/user/gallery/create')}>
                            Criar nova galeria
                        </Button>
                    </GalleryContainer>
                </>
                :
                <></>
            }
        </>
    )
}

export default ProfilePage
