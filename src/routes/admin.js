import { Route, Switch, useRouteMatch } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import CreatePainter from "../pages/CreatePainter"
import Home from "../pages/Home"

const AdminRoutes = () => {
    
    const { user } = useUserContext()
    let { path } = useRouteMatch()
    
    return (
        <Switch>
            {
                user ?
                <>
                    {
                        user.is_admin ?
                            <>
                                <Route exact path={path} />
                                <Route exact path={`${path}/painter/create`} component={CreatePainter} />
                            </>
                            :
                            <>
                                <Route path={path} component={Home} />
                            </>
                    }
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
