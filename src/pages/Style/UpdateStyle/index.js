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
import { useState, useEffect } from "react"
import Button from "../../../components/Button"
import placeholder from '../../../assets/StylePlaceholder.jpg';
import { BiCamera } from 'react-icons/bi'
import { api } from '../../../services/api'
import { useParams } from 'react-router-dom'

const UpdateStyle = () => {

    let { id } = useParams()

    const [photoURL, setPhotoURL] = useState('');
    const [description, setDescription] = useState('')
    const [styleName, setStylename] = useState('')
    const [nameFailure, setNameFailure] = useState(false)
    const [descriptionFailure, setDescriptionFailure] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [tempPhoto, setTempPhoto] = useState(null)

    useEffect (async () => {
      try {	       
        const response = await api.get('style/show/'+id)
        console.log(response)
        if (response.data){
          setPhotoURL("http://127.0.0.1:3333"+response.data.photo_url)
          setDescription(response.data.description)
          setStylename(response.data.name)
        }
    } catch(e){
        alert("Erro, tente novamente")
    }
    }, [])

    


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
                const response = await api.put('style/update/'+id,{
                style: {
                    name: styleName,
                    description: description
                    }
                })
                if (photo){
                  const formData = new FormData();
                  formData.append('photo', tempPhoto)
                  const res = await api.put('style/add_photo/'+id, formData)
                  console.log(res)
                }  
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
                <h1>Editar Estilo</h1>
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
                    
                    <ImageInput>
                                <label className="custom-file-input">
                                    <BiCamera size={36} />
                                    <input
                                        type="file"
                                        onChange={event => {
                                            setPhoto(URL.createObjectURL(event.target.files[0]))
                                            setTempPhoto(event.target.files[0])
                                        }}
                                    />
                                </label>
                            </ImageInput>
                            <img src={photo?photo:photoURL} alt="Foto do estilo" />
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

export default UpdateStyle
