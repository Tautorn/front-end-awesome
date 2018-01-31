import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import axios from 'axios'
import LoginForm from './forms/LoginForm'
import {isAdmin, isClient} from '../utils/AuthUtils'
import {BACKOFFICE_PATH, ROOT_PATH} from '../constants/RouterConstants'

export default class Login extends Component {

    doLogin(values) {
        axios.post('http://0.0.0.0:3001/login', values)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('auth-token', response.data.token)
                    localStorage.setItem('role', response.data.role)
                    if(isAdmin()) browserHistory.push(BACKOFFICE_PATH)
                    if(isClient()) browserHistory.push(ROOT_PATH)
                }
            })
    }

    render() {
        return (
            <div className='login'>
                <LoginForm onSubmit={this.doLogin}/>
            </div>
        )
    }
}