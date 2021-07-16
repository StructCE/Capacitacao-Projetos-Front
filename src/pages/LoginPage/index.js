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
import { useUserContext } from "../../contexts/useUserContext"

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault()

        login({ email, password })
    }

    return (
        <Container>
            <LeftSector>
                <div className="transparent" />
                <div className="gradient" />
            </LeftSector>
            <CenterSector>
                <h1>Bem vindo de volta!</h1>
                <InputSection onSubmit={handleSubmit}>
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
                    <Button type='submit'>
                        Entrar
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

export default LoginPage
