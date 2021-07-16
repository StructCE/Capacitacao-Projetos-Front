import { useUserContext } from "../contexts/useUserContext"

export const Home = () => {

    const { user } = useUserContext()

    return <h1> { user ? user.name : 'la Voûte des Couleurs' } </h1>
}