import Input from "../../components/Input";
import { FiCalendar} from "react-icons/fi";
import { RiArtboardLine } from "react-icons/ri";
import Button from "../../components/Button";
import {
  LeftSector,
  RightSector,
  CenterSector,
  Container,
  InputSection,
} from "../CreatePainting/style";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const CreatePainting = () => {

  const [name, setName] = useState("");
  const [painters, setPainters] = useState([]);
  const [painterId, setPainterId] = useState(null);
  const [styles, setStyles] = useState([]);
  const [styleId, setStyleId] = useState(null);
  const [time_of_completion, setTime_of_completion] = useState("");

  const history = useHistory();

  const loadPainters = async () => {
    const response = await api.get('/painters/index')
    setPainters(response.data)
    setPainterId(response.data[0].id)
  }

  const loadStyles = async () => {
    const response = await api.get('/styles/index')
    setStyles(response.data)
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

    const response = await api.post('/painting/create', {
      painting: {
        name, 
        painters, 
        styles, 
        time_of_completion
      }
    })

    if(response.data){
      alert('Pintura criada!')
      history.push('/login')
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
          />

          <select>
            
          </select>

          <Input
            Icon={FiCalendar}
            placeholder={"Data de Criação"}
            type={"date"}
            onChange={(value) => setTime_of_completion(value.target.value)}
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
