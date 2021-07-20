import Input from "../../components/Input"
import { FiLock, FiMail } from 'react-icons/fi'
import {
        Container,
        LeftSector,
        CenterSector,
        RightSector,
        InputSection,
        ErrorSection
} from './style'
import { useState } from "react"
import Button from "../../components/Button"
import { useUserContext } from "../../hooks/useUserContext"

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error } = useUserContext();
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "") {
            setEmailError(true)
        }

        if (passwordError === "") {
            setPasswordError(true)
        }

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
                    {
                        error && 
                            <ErrorSection>
                                Sua senha ou seu email estão incorretos
                            </ErrorSection>
                    }
                    <Input
                        Icon={FiMail}
                        type="email"
                        placeholder="Email"
                        failed={emailError}
                        failureMessage={'Favor preencher o email corretamente'}
                        onChange={event => {
                            setEmail(event.target.value)
                            setEmailError(false)
                        }}
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Senha"
                        failed={passwordError}
                        failureMessage={'Favor colocar a senha correta'}
                        onChange={event => {
                            setPassword(event.target.value)
                            setPasswordError(false)
                        }}
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
