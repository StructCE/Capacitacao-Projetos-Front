import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AdminRoutes from './admin';
import UserRoutes from './user';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route exact path='/user' component={UserRoutes} />
            <Route path='/admin' component={AdminRoutes} />
        </Switch>
    )
}

export default Routes