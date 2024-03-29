import { Route, Switch, useRouteMatch } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import CreateStyle from "../pages/Style/CreateStyle"
import UpdateStyle from "../pages/Style/UpdateStyle"
import CreatePainter from "../pages/CreatePainter"
import CreatePainting from "../pages/CreatePainting"
import Home from "../pages/Home"
import EditPainter from "../pages/EditPainterPage"
import UpdatePainting from "../pages/EditPaintingPage"

const AdminRoutes = () => {
    
    const { user } = useUserContext()
    let { path } = useRouteMatch()
    console.log(user);

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
                                <Route exact path={`${path}/painter/:id/edit`} component={EditPainter} />
                                <Route exact path={`${path}/create-style`} component={CreateStyle} />
                                <Route exact path={`${path}/painting/create`} component={CreatePainting}/>
                                <Route exact path={`${path}/update-style/:id`} component={UpdateStyle}/>
                                <Route exact path={`${path}/painting/:id/edit`} component={UpdatePainting}/>
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
