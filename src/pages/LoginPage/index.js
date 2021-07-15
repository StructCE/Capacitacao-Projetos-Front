import Input from "../../components/Input"
import { FiLock, FiMail } from 'react-icons/fi'

const LoginPage = () => {
    return (
        <div>
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
        </div>
    )
}

export default LoginPage
