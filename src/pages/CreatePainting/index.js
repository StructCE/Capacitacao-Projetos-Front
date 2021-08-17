import Input from "../../components/Input";
import { FiBook, FiCalendar} from "react-icons/fi";
import { RiArtboardLine } from "react-icons/ri";
import Button from "../../components/Button";
import {
  LeftSector,
  RightSector,
  CenterSector,
  Container,
  InputSection,
  selectStyle,
} from "../CreatePainting/style";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Select from 'react-select'

const CreatePainting = () => {

  const [name, setName] = useState("");
  const [painters, setPainters] = useState([]);
  const [painterId, setPainterId] = useState(null);
  const [styles, setStyles] = useState([]);
  const [styleId, setStyleId] = useState(null);
  const [time_of_completion, setTime_of_completion] = useState("");
  const [bio, setBio] = useState('')

  const history = useHistory();

  const loadPainters = async () => {
    const response = await api.get('/painter/index')
    setPainters(response.data.map(painter => {
      return {value: painter.id, label: painter.name}
    }))
    setPainterId(response.data[0].id)
  }

  const loadStyles = async () => {
    const response = await api.get('/style/index')
    setStyles(response.data.map(style => {
      return {value: style.id, label: style.name}
    }))
    setStyleId(response.data[0].id)
  }

  useEffect(() => {
    loadPainters();
    loadStyles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("O nome da pintura deve estar preenchido.");
    } else if (time_of_completion === "") {
      alert("Biografia de senha deve estar preenchida.");
    }

    const response = await api.post('/paintings/create', {
      painting: {
        name,
        time_of_completion,
        painter_id: painterId,
        style_id: styleId,
        description: bio
      }
    })

    if(response.data){
      alert('Pintura criada!')
      history.push('/painting/'+response.data.id)
    }
  };

  return (
    <Container>
      <LeftSector>
        <div className="transparent" />
        <div className="gradient" />
      </LeftSector>
      <CenterSector>
        <InputSection onSubmit={handleSubmit}>
          <h1>Crie Pinturas</h1>
          <Input
            Icon={RiArtboardLine}
            placeholder={"Nome da Pintura"}
            type={"text"}
            onChange={(value) => setName(value.target.value)}
            value={name}
          />

          <TextArea
            Icon={FiBook}
            placeholder={"Descrição"}
            onChange={event => setBio(event.target.value)}
            value={bio}
          />

          <Select 
            options={styles} 
            placeholder='Estilo'
            styles={selectStyle}
            onChange={value => setStyleId(value.value)}
          />

          <Select 
            options={painters} 
            placeholder='Pintor' 
            styles={selectStyle}
            onChange={value => setPainterId(value.value)}
          />

          <Input
            Icon={FiCalendar}
            placeholder={"Data de Criação"}
            type={"date"}
            onChange={(value) => setTime_of_completion(value.target.value)}
            value={time_of_completion}
          />

          <Button type="submit">Criar Pintura</Button>
        </InputSection>
      </CenterSector>
      <RightSector>
        <div className="gradient" />
        <div className="transparent" />
      </RightSector>
    </Container>
  );
};

export default CreatePainting;
