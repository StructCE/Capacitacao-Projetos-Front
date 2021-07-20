import Input from "../../components/Input"
import {FiCalendar, FiUser, FiBookOpen} from 'react-icons/fi'
import {GiPirateGrave} from 'react-icons/gi'
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import { LeftSector, RightSector, CenterSector, Container } from "../CreatePainter/style"

const CreatePainter = () => {
  return (
    <Container>
      <LeftSector>
        <div className="transparent" />
        <div className="gradient" />
      </LeftSector>
      <CenterSector>
      <h1>Adicione novos pintores</h1>
      <Input
        Icon={FiUser}
        placeholder={"Nome do Artista"}
        type={"text"}
      />

      <Input 
        Icon={FiCalendar}
        placeholder={"Data de Nascimento"}
        type={"date"}
      />

      <Input
        Icon={GiPirateGrave}
        placeholder={"Data de Morte"}
        type={"date"}
      />

      <TextArea
        Icon={FiBookOpen}
        placeholder={"Biografia"}
      />

      <Button>Criar Pintor</Button>
      </CenterSector>
      <RightSector>
        <div className="gradient" />
        <div className="transparent" />
      </RightSector>
    </Container>
  )
}

export default CreatePainter