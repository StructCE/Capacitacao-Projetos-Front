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
            alert(e.message)
        }
    }

    const register = async ({ email, password, name }) => {
        try {
            const response = await api.post('user/create', {
                user: {
                    name,
                    email,
                    password
                }
            })
            Cookies.setItem('laVoute/User', JSON.stringify(response.data))

            setUser(response.data)
            history.push('/')
        } catch(e) {
            alert(e.message)
        }
    }

    return (
        <UserContext.Provider value={{ user, login, checkCookies, register }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context
}

export default UserProvider