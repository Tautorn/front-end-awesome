import {Component} from 'react'
import {browserHistory} from  'react-router';
import {LOGIN_PATH} from '../constants/RouterConstants'

export default class Logout extends Component {

    componentWillMount(){
        localStorage.removeItem('auth-token')
        localStorage.removeItem('role')
        browserHistory.push(LOGIN_PATH)
    }

    render(){
        return null
    }
}