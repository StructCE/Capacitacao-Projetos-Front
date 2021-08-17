import Input from "../../components/Input"
import { BiBook } from 'react-icons/bi'
import {
        Container,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection
} from './styles'
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import { useUserContext } from "../../hooks/useUserContext"
import { api } from "../../services/api"
import { useHistory, useParams } from "react-router-dom"
const EditGalleryPage = () => {

    const [name, setName] = useState('')

    let { id } = useParams()
    const { user, loaded, refreshUser } = useUserContext()
    const history = useHistory()

    const handleApiRequest = async () => {
        try {
            const response = await api.get(`/gallery/show/${id}`)
            response &&
                setName(response.data.name)
        } catch(e) {
            alert(e)
        }
    }

    useEffect(() => {
        loaded &&
            handleApiRequest()
    }, [loaded])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.put(`/gallery/update/${id}`, {
                gallery: {
                    name,
                    user_id: user.id
                }
            })
            console.log(response.data)
            refreshUser()
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
                <h1>Atualize sua Galeria</h1>
                <InputSection onSubmit={handleSubmit}>
                    <Input
                        Icon={BiBook}
                        type="text"
                        placeholder="Nome"
                        onChange={event => {setName(event.target.value)}}
                        value={name}
                    />
                    <Button type='submit'>
                        Editar
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

export default EditGalleryPage
