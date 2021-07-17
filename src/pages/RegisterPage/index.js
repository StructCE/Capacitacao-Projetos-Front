import Input from "../../components/Input"
import { FiLock, FiMail, FiUser, FiImage } from 'react-icons/fi'
import {
        Container,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection
} from './style'
import { useState } from "react"
import Button from "../../components/Button"
import { useUserContext } from "../../hooks/useUserContext"

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [username, setUsername] = useState('')
    const { register } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault()

        register({
            email,
            password,
            name: username
        })
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
                        Icon={FiUser}
                        type="text"
                        placeholder="Nome de Usuário"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <Input
                        Icon={FiMail}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Confirmar Senha"
                        value={passwordConfirmation}
                        onChange={event => setPasswordConfirmation(event.target.value)}
                    />
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

export default LoginPage
