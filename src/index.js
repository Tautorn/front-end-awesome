import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import ClientRoot from './App'
import registerServiceWorker from './registerServiceWorker'
import Login from './components/Login'
import Logout from './components/Logout'
import Banking from './containers/Banking'
import Configs from './containers/Configs'
import Refunds from './containers/Refunds'
import AdminApp from './AdminApp'
import configureStore from './configureStore'
import Authorization from './components/Authorization'
import {isAuthenticated} from './utils/AuthUtils'
import './css/App.css'
import {
    ROOT_PATH,
    BANKING_PATH,
    CONFIGS_PATH,
    LOGIN_PATH,
    BACKOFFICE_PATH,
    LOGOUT_PATH
} from './constants/RouterConstants'


function verifyAuth(nextState, replace){
    if(!isAuthenticated()) replace('/login')
}

const store = configureStore()
const Client = Authorization(['client']);
const Admin = Authorization(['admin']);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path={LOGIN_PATH} component={Login} />
                <Route path={LOGOUT_PATH} component={Logout} />
                <Route path={BACKOFFICE_PATH} component={Admin(AdminApp)} onEnter={verifyAuth} />
                <Route path={ROOT_PATH} component={Client(ClientRoot)} onEnter={verifyAuth}>
                    <IndexRoute component={Refunds}/>
                    <Route path={BANKING_PATH} component={Banking} />
                    <Route path={CONFIGS_PATH} component={Configs} />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'))
registerServiceWorker()