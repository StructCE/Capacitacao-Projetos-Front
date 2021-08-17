import Input from "../../components/Input"
import { BiBook } from 'react-icons/bi'
import {
        Container,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection
} from './styles'
import { useState } from "react"
import Button from "../../components/Button"
import { useUserContext } from "../../hooks/useUserContext"
import { api } from "../../services/api"
import { useHistory } from "react-router-dom"
const CreateGalleryPage = () => {

    const [name, setName] = useState('')

    const { user } = useUserContext()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/gallery/create', {
                gallery: {
                    name,
                    user_id: user.id
                }
            })
            console.log(response.data)
            history.push('/user')
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <Container>
            <LeftSector>
                <div className="transparent" />
                <div className="gradient" />
            </LeftSector>
            <CenterSector>
                <h1>Crie uma Nova Galeria</h1>
                <InputSection onSubmit={handleSubmit}>
                    <Input
                        Icon={BiBook}
                        type="text"
                        placeholder="Nome"
                        onChange={event => {setName(event.target.value)}}
                    />
                    <Button type='submit'>
                        Criar
                    </Button>
                </InputSection>
            </CenterSector>
            <RightSector>
                <div className="gradient" />
                <div className="transparent" />
            </RightSector>
        </Container>
    )
}

export default CreateGalleryPage
