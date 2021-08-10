import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CreatePainter from './pages/CreatePainter'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/painter/create' component={CreatePainter}/>
        </Switch>
    )
}