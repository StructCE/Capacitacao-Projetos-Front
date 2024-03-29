import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from '../services/api';
import Cookies from 'js-cookies';


const UserContext = createContext();

const UserProvider = ({ children }) => {    

    const [user, setUser] = useState(null)
    const history = useHistory();
    const [error, setError] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const checkCookies = async () => {
        const cookie = await Cookies.getItem('laVoute/User')

        let tmp = JSON.parse(cookie)

        if (tmp) {
            setUser(tmp)

            api.defaults.headers.common['X-User-Token'] = tmp.authentication_token
            api.defaults.headers.common['X-User-Email'] = tmp.email

            refreshUser(tmp)
        }
    }

    const refreshUser = async () => {
        try {
            const response = await api.get('/user/show')
            Cookies.setItem('laVoute/User', JSON.stringify(response.data))
            setUser(response.data)
            console.log(response.data)
            api.defaults.headers.common['X-User-Token'] = response.data.authentication_token
            api.defaults.headers.common['X-User-Email'] = response.data.email

            setLoaded(true)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        checkCookies()
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
            api.defaults.headers.common['X-User-Token'] = response.data.authentication_token
            api.defaults.headers.common['X-User-Email'] = response.data.email
            setUser(response.data)
            setError(false)
            setLoaded(true)
            history.go(1)
        } catch(e) {
            setError(true)
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
            setError(false)
            history.go(1)
        } catch(e) {
            setError(true)
        }
    }

    const update = async ({ email, password, name }) => {
        try {
            const response = await api.put('user/update', {
                user: {
                    name,
                    email,
                    password
                }
            })
            Cookies.setItem('laVoute/User', JSON.stringify(response.data))

            setUser(response.data)
            setError(false)
            history.go(1)
        } catch(e) {
            setError(true)
        }
    }

    const logout = async () => {
        try {
            const response = await api.get('/logout', {
                headers: {
                    'X-User-Token': user.authentication_token,
                    'X-User-Email': user.email
                }
            })
            response &&
                Cookies.removeItem('laVoute/User')
                setUser(null)
                history.go(0)
        } catch(e) {
            Cookies.removeItem('laVoute/User')
            setUser(null)
        }
    }

    return (
        <UserContext.Provider value={{ 
                user,
                login, 
                register, 
                error, 
                refreshUser, 
                setUser, 
                update, 
                logout,
                loaded
            }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context
}

export default UserProvider
