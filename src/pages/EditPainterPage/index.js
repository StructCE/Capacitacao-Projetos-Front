import Input from "../../components/Input";
import { FiCalendar, FiUser, FiBookOpen } from "react-icons/fi";
import { GiPirateGrave } from "react-icons/gi";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import {
  LeftSector,
  RightSector,
  CenterSector,
  Container,
  InputSection
} from "../CreatePainter/style";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'

const EditPainter = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [bio, setBio] = useState("");
  let { id } = useParams()

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Nome deve estar preenchido.");
    } else if (!born) {
      console.log(born)
      alert("Data de nascimento deve estar preenchida.");
    } else if (died === "") {
      alert("Data de óbito deve estar preenchida.");
    } else if (bio === "") {
      alert("Biografia de senha deve estar preenchida.");
    }

    const response = await api.put('/painter/update/'+id, {
      painter: {
        name, 
        born, 
        died, 
        bio
      }
    })

    if(response.data){
      alert('pintor atualizado!')
      history.push('/painter/'+id)
    }
  };

  const handleApiRequests = async () => {
    try {
      const response = await api.get(`/painter/show/${id}`)
      setName(response.data.name)
      setBorn(response.data.born)
      setDied(response.data.died)
      setBio(response.data.bio)
    } catch(e) {

    }
  }

  useEffect(() => {
    handleApiRequests()
  }, [])

  return (
    <Container>
      <LeftSector>
        <div className="transparent" />
        <div className="gradient" />
      </LeftSector>
      <CenterSector>
        <InputSection onSubmit={handleSubmit}>
        <h1>Adicione novos pintores</h1>
        <Input 
          Icon={FiUser} 
          placeholder={"Nome do Artista"} 
          type={"text"} 
          onChange={(value) => setName(value.target.value)}
          value={name} 
        />

        <Input
          Icon={FiCalendar}
          placeholder={"Data de Nascimento"}
          type={"date"}
          onChange={(value) => setBorn(value.target.value)}
          value={born}
        />

        <Input
          Icon={GiPirateGrave}
          placeholder={"Data de Morte"}
          type={"date"}
          onChange={(value) => setDied(value.target.value)}
          value={died}
        />

        <TextArea 
          Icon={FiBookOpen} 
          placeholder={"Biografia"} 
          onChange={(value) => setBio(value.target.value)}
          value={bio}
        />

        <Button type="submit">Criar Pintor</Button>
        </InputSection>
      </CenterSector>
      <RightSector>
        <div className="gradient" />
        <div className="transparent" />
      </RightSector>
    </Container>
  );
};

export default EditPainter;
