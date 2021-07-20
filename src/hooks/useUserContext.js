import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from '../services/api';
import Cookies from 'js-cookies';

const UserContext = createContext();

const UserProvider = ({ children }) => {    

    const [user, setUser] = useState(null)
    const history = useHistory();

    const checkCookies = async () => {
        const cookie = await Cookies.getItem('laVoute/User')
        setUser(JSON.parse(cookie))
    }

    useEffect(() => {
        checkCookies()
        console.log(user)
    }, [])

    const login = async ({ email, password }) => {
        try {
            const response = await api.get('/login', {
                params: {
                    email,
                    password
                }
            })
            Cookies.setItem('laVoute/User', JSON.stringify(response.data))

            setUser(response.data)
            history.push('/')
        } catch(e) {
            alert(e)
        }
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context
}

export default UserProvider
