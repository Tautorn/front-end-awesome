import React, {Component} from 'react';
import Login from './Login'

const Authorization = allowedRoles => WrappedComponent => {
    return class WithAuthorization extends Component {
        constructor(props) {
            super(props)

            // TODO: use a redux way
            this.role = localStorage.getItem('role');
        }

        render() {
            const {role} = this
            return allowedRoles.includes(role) ? <WrappedComponent {...this.props} /> : <Login/>
        }
    }
}
export default Authorization