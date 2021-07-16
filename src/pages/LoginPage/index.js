import Input from "../../components/Input"
import { FiLock, FiMail } from 'react-icons/fi'
import {
        Container,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection
} from './style'
import { useState } from "react"
import Button from "../../components/Button"

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Senha"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button>Entrar</Button>
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
