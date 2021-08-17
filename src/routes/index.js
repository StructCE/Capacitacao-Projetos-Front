import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LinkPaintingPage from '../pages/LinkPaintingPage';
import LoginPage from '../pages/LoginPage'
import PainterPage from '../pages/PainterPage';
import PaintingPage from '../pages/PaintingPage';
import RegisterPage from '../pages/RegisterPage'
import AdminRoutes from './admin';
import UserRoutes from './user';
import Style from '../pages/Style';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/user' component={UserRoutes} />
            <Route path='/admin' component={AdminRoutes} />
            <Route path='/painter/:id' component={PainterPage} />
            <Route exact path='/painting/:id' component={PaintingPage} />
            <Route exact path='/painting/:id/link' component={LinkPaintingPage} />
            <Route exact path='/style' component={Style} />
        </Switch>
    )
}

export default Routes