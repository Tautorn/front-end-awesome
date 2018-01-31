import React, {Component} from 'react'
import {Link} from 'react-router'
import {ROOT_PATH, BANKING_PATH, CONFIGS_PATH} from '../constants/RouterConstants'

class SideMenu extends Component{

    isActive = (currentUrl) => {
        const {path} = this.props
        return path === currentUrl
    }

    render(){
        const {isActive} = this;
        return (
            <ul className="side-menu">
                <li className={`side-menu__item ${isActive(ROOT_PATH) ? 'side-menu__link--active' : ''}`}>
                    <Link to={ROOT_PATH} className={`side-menu__link ${isActive(ROOT_PATH) ? 'side-menu__link--active' : ''}`}>
                        Reembolsos
                    </Link>
                </li>
                <li className={`side-menu__item ${isActive(BANKING_PATH) ? 'side-menu__link--active' : ''}`}>
                    <Link to={BANKING_PATH} className={`side-menu__link ${isActive(BANKING_PATH) ? 'side-menu__link--active' : ''}`}>
                        Conta Bancária
                    </Link>
                </li>
                <li className={`side-menu__item ${isActive(CONFIGS_PATH) ? 'side-menu__link--active' : ''}`}>
                    <Link to={CONFIGS_PATH} className={`side-menu__link ${isActive(CONFIGS_PATH) ? 'side-menu__link--active' : ''}`}>
                        Configurações
                    </Link>
                </li>
            </ul>
        );
    }
};
export default SideMenu