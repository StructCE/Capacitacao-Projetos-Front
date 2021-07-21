import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/user' component={ProfilePage} />
        </Switch>
    )
}