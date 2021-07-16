import { useUserContext } from "../hooks/useUserContext"

export const Home = () => {

    const { user } = useUserContext()

    return <h1> { user ? user.name : 'la Voûte des Couleurs' } </h1>
}