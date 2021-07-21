import { useUserContext } from "../../hooks/useUserContext";
import {
    Container,
    NoUser,
    InformationContainer,
    ImageInput
} from "./styles";
import placeholder from '../../assets/BaseUserPicture.jpg';
import { BiCamera } from 'react-icons/bi'
import { useState } from "react";
import { api } from "../../services/api";

const ProfilePage = () => {

    const { user, refreshUser } = useUserContext()
    const [photo, setPhoto] = useState(null)

    const handlePhotoUpload = async (e) => {
        e.preventDefault()

        const formData = new FormData();

		formData.append('photo', photo)

        console.log(photo)

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
                <Container>
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
                            <h3>{user.name}</h3>
                            <span>{user.email}</span>
                        </div>
                    </InformationContainer>
                </Container>
                :
                <NoUser>

                </NoUser>
            }
        </>
    )
}

export default ProfilePage
