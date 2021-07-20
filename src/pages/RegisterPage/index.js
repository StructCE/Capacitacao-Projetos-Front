import Input from "../../components/Input"
import { FiLock, FiMail, FiUser, FiImage } from 'react-icons/fi'
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
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [username, setUsername] = useState('')
    const { register, error } = useUserContext();
    const [nameFailure, setNameFailure] = useState(false)
    const [emailFailure, setEmailFailure] = useState(false)
    const [passwordFailure, setPasswordFailure] = useState(false)
    const [passwordConfirmationFailure, setPasswordConfirmationFailure] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === '') {
            setEmailFailure(true)
        }

        if (username.lenght < 3 || username === '') {
            setNameFailure(true)
        }

        if (password.length < 6) {
            setPasswordFailure(true)
        }

        if (password !== passwordConfirmation || passwordFailure) {
            setPasswordConfirmationFailure(true)
        }

        if (!(nameFailure || emailFailure || passwordFailure || passwordConfirmationFailure)) {
            register({
                email,
                password,
                name: username
            })
        }
    }

    return (
        <Container>
            <LeftSector>
                <div className="transparent" />
                <div className="gradient" />
            </LeftSector>
            <CenterSector>
                <h1>Estamos felizes com a sua chegada!</h1>
                <InputSection onSubmit={handleSubmit}>
                    {
                        error &&
                            <ErrorSection>
                                Esse email já está sendo usado!
                            </ErrorSection>
                    }
                    <Input
                        Icon={FiUser}
                        type="text"
                        placeholder="Nome de Usuário"
                        value={username}
                        failed={nameFailure}
                        failureMessage={'O nome de usuário deve ter ao menos 3 caracteres'}
                        onChange={event => {
                            setUsername(event.target.value);
                            setNameFailure(false)
                        }}
                    />
                    <Input
                        Icon={FiMail}
                        type="email"
                        placeholder="Email"
                        value={email}
                        failed={emailFailure}
                        failureMessage={'Favor inserir um email válido'}
                        onChange={event => {
                            setEmail(event.target.value);
                            setEmailFailure(false)
                        }}
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Senha"
                        value={password}
                        failed={passwordFailure}
                        failureMessage={'Favor inserir uma senha com 6 ou mais caracteres'}
                        onChange={event => {
                            setPassword(event.target.value)
                            setPasswordFailure(false)
                        }}
                    />
                    <Input 
                        Icon={FiLock}
                        type="password"
                        placeholder="Confirmar Senha"
                        value={passwordConfirmation}
                        failed={passwordConfirmationFailure}
                        failureMessage={'As senhas tem de ser iguais'}
                        onChange={event => {
                            setPasswordConfirmation(event.target.value)
                            setPasswordConfirmationFailure(false)
                        }}
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
