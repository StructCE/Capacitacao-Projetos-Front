import {
        Container,
        Title,
        LeftSector,
        RightSector
} from './style'
import Futurismo from "../../assets/Futurismo.jpeg"
import { useState } from "react"
import { api } from '../../services/api'
import HorizontalScroll from '../../components/HorizontalScroll'

const Style = () => {

    const [description, setDescription] = useState('')
    const [styleName, setStylename] = useState('')
    const [nameFailure, setNameFailure] = useState(false)
    const [descriptionFailure, setDescriptionFailure] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [tempPhoto, setTempPhoto] = useState(null)

    


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
                const response = await api.post('style/create',{
                style: {
                    name: styleName,
                    description: description
                    }
                })
                const formData = new FormData();
                formData.append('photo', tempPhoto)
                if (response.status === 201){
                    const res = await api.put('style/add_photo/'+response.data.id, formData)
                    console.log(res)
                    alert("Criado com sucesso!")
                }
            } catch(e){
                alert("Erro, tente novamente")
            }
        } 
    }

    return (
        <Container>
            <Title>Futurismo</Title>
                <LeftSector>
                    <img src={Futurismo} alt="obra futurista" />
                </LeftSector>
                <RightSector>
                    <p>Futurism was an artistic and social movement that originated in Italy in the early 20th century. It emphasized dynamism, speed, technology, youth, violence, and objects such as the car, the airplane, and the industrial city.</p>
                    <p> Wikipedia</p>
                </RightSector>
        </Container>
    )
}

export default Style
