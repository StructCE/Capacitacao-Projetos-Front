import { Route, Switch, useRouteMatch } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import EditUserPage from '../pages/EditUserPage'
import CreateGalleryPage from "../pages/CreateGalleryPage"
import GalleryPage from "../pages/GalleryPage"
import EditGalleryPage from "../pages/EditGalleryPage"

const UserRoutes = () => {

    const { user } = useUserContext()
    let { path } = useRouteMatch()

    return (
        <Switch>
            {
                user ?
                <>
                    <Route exact path={path} component={ProfilePage} />
                    <Route exact path={`${path}/edit`} component={EditUserPage} />
                    <Route exact path={`${path}/gallery/create`} component={CreateGalleryPage} />
                    <Route exact path={`${path}/gallery/:id`} component={GalleryPage} />
                    <Route exact path={`${path}/gallery/:id/edit`} component={EditGalleryPage} />
                </>
                :
                    <Route path={path} component={LoginPage} />
            }
        </Switch>
    )
}

export default UserRoutes
