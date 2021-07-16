import Input from "../../components/Input"
import { FiLock, FiMail } from 'react-icons/fi'
import {
        Container,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection
} from './style'

const LoginPage = () => {
    return (
        <Container>
            <LeftSector>
                <div className="transparent" />
                <div className="gradient" />
            </LeftSector>
            <CenterSector>
                <h1>Bem vindo de volta!</h1>
                <InputSection>
                    <Input
                        Icon={FiMail}
                        type="email"
                        placeholder="Email"
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                </InputSection>
            </CenterSector>
            <RightSector>
                <div className="gradient" />
                <div className="transparent" />
            </RightSector>
        </Container>
    )
}

export default LoginPage
