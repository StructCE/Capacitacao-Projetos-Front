import { Route, Switch, useRouteMatch } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import EditUserPage from '../pages/EditUserPage'

const UserRoutes = () => {

    const { user } = useUserContext()
    let { path } = useRouteMatch()

    return (
        <Switch>
            {
                user ?
                <>
                    <Route exact path={path} component={ProfilePage} />
                    <Route path={`${path}/edit`} component={EditUserPage} />
                </>
                :
                    <Route path={path} component={LoginPage} />
            }
        </Switch>
    )
}

export default UserRoutes
