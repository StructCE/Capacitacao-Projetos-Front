import axios from 'axios';
import { useUserContext } from '../hooks/useUserContext';

const { checkCookies } = useUserContext()

const user = checkCookies()

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/v1',
    headers: {
        'X-User-Auth': user.authentication_token,
        'X-User-Email': user.email
    }
})