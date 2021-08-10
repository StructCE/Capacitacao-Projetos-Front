import { Route, Switch, useRouteMatch } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import { Home } from "../pages/Home"

const AdminRoutes = () => {
    
    const { user } = useUserContext()
    let { path } = useRouteMatch()
    
    return (
        <Switch>
            {
                user.is_admin ?
                <>
                    <Route exact path={path} />
                </>
                :
                <>
                    <Route path={path} component={Home} />
                </>
            }
        </Switch>
    )
}

export default AdminRoutes
