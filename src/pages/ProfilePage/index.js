import { useUserContext } from "../../hooks/useUserContext";
import {
    Container,
    NoUser,
    InformationContainer,
    ImageInput
} from "./styles";
import placeholder from '../../assets/BaseUserPicture.jpg';
import { BiCamera } from 'react-icons/bi'

const ProfilePage = () => {

    const { user } = useUserContext()

    return (
        <>
            {
                user ?
                <Container>
                    <InformationContainer>
                        <ImageInput>
                            <div>
                                <BiCamera />
                                <input
                                    type="file"
                                />
                            </div>
                            <img src={!user.user_photo ? placeholder : user.user_photo} alt="Foto de perfil" />
                        </ImageInput>
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
