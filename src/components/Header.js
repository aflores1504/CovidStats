import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {

        return (
            <header id="header">
                <div className="center">

                    {/*-- LOGO --*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>SPA</strong>React
                    </span>

                    </div>

                    {/*-- MENU -- */}
                    <nav id="menu">
                        <ul>

                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            
                            
                        </ul>

                    </nav>

                    {/*-- Limpiar Flotados --*/}
                    <div className="clearfix"></div>

                </div>



            </header>
        )
    }

}

export default Header;