import { Route, Switch, useRouteMatch } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import { Home } from "../pages/Home"
import CreateStyle from "../pages/Style/CreateStyle"

const AdminRoutes = () => {
    
    const { user } = useUserContext()
    let { path } = useRouteMatch()
    console.log(user);

    return (
        <Switch>
            {
              
                user ?
                    user.is_admin ?
                    <>
                        <Route exact path={`${path}/create-style`} component={CreateStyle}/>
                        <Route exact path={path} />
                    </>
                    :
                    <>
                        <Route path={path} component={Home} />
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
