import React from 'react'
import {Link} from 'react-router'

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__title">
                Refunds System
            </Link>
            <Link to="/logout" className="header__item header__item--right">
                <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
            </Link>
        </header>
    )
}
export default Header