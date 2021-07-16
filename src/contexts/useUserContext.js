import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from '../services/api'

const UserContext = createContext();

const UserProvider = ({ children }) => {    

    const [user, setUser] = useState(null)
    const history = useHistory();

    const login = async ({ email, password }) => {
        try {
            const response = await api.get('/login', {
                params: {
                    email,
                    password
                }
            })
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
