import React ,{Component}from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {

    render() {
        return (
            <div className="app-header">

            <img src={logo} className="app-logo" alt="app-log"/>
                <Button variant="contained" color="default" className="login-button">
                    Login
                </Button>
            </div>
        )
    }
}

export default Header;