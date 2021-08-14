import Input from "../../../components/Input"
import TextArea from "../../../components/TextArea"
import { FiItalic, FiFileText, FiImage } from 'react-icons/fi'
import {
        Container,
        ImageInput,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection,
        ErrorSection
} from './style'
import { useState } from "react"
import Button from "../../../components/Button"
import placeholder from '../../../assets/StylePlaceholder.jpg';
import { BiCamera } from 'react-icons/bi'
import { api } from '../../../services/api'

const CreateStyle = () => {

    const [description, setDescription] = useState('')
    const [styleName, setStylename] = useState('')
    const [nameFailure, setNameFailure] = useState(false)
    const [descriptionFailure, setDescriptionFailure] = useState(false)
    const [photo, setPhoto] = useState()

    const formData = new FormData();
    

    const handlePhotoUpload = (e) => {
        e.preventDefault()

        const formData = new FormData();

		formData.append('photo', photo)

        console.log(photo)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (description.length < 30 || description === '') {
            setDescriptionFailure(true)
        }

        if (styleName.lenght < 3 || styleName === '') {
            setNameFailure(true)
        }


        if (!(nameFailure || descriptionFailure)) {
            try {		        
                const response = await api.post('style/create', {
                    style:{
                        name: styleName,
                        description: description
                    },
                    photo: formData.get('photo') 
                })
                console.log(response)
            } catch(e){
                alert("Erro, tente novamente")
            }
        } 
    }

    return (
        <Container>
            <LeftSector>
                <div className="transparent" />
                <div className="gradient" />
            </LeftSector>
            <CenterSector>
                <h1>Criar Estilo</h1>
                <InputSection onSubmit={handleSubmit}>
                    <Input
                        Icon={FiItalic}
                        type="text"
                        placeholder="Nome do Estilo"
                        value={styleName}
                        failed={nameFailure}
                        failureMessage={'O nome de estilo deve ter ao menos 3 caracteres'}
                        onChange={event => {
                            setStylename(event.target.value);
                            setNameFailure(false)
                        }}
                    />
                    <TextArea
                        Icon={FiFileText}
                        type="text-box"
                        placeholder="Descrição"
                        value={description}
                        failed={descriptionFailure}
                        failureMessage={'A descrição deve ter ao menos 30 caracteres'}
                        onChange={event => {
                            setDescription(event.target.value);
                            setDescriptionFailure(false)
                        }}
                    />
                    
                    <ImageInput /*onSubmit={handlePhotoUpload}*/>
                                <label className="custom-file-input">
                                    <BiCamera size={36} />
                                    <input
                                        type="file"
                                        onChange={event => {
                                            formData.set('photo', event.target.files[0])
                                            console.log(formData.get('photo'))
                                            
                                        }}
                                    />
                                </label>
                                {/*<button type="submit">
                                    Mudar de foto
                                 </button>*/}
                            </ImageInput>
                            <img src={formData.get('photo')?formData.get('photo'):placeholder} alt="Foto do estilo" />
                    <Button type='submit'>
                        Cadastrar
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

export default CreateStyle
