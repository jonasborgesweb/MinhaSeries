import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

//Importando a Logo
import logo from './../../images/Logo-branco.png'

class Menu extends Component{
    render(){
        return (
            <header className="header">
                <div className="center">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <Link to='/'>
                                <img className="header__img" src={logo} alt="Logomarca"/>
                            </Link>
                        </div>
                        <nav className="menu">
                            <ul className="menu__lista">
                                <li className="menu__item">
                                    <Link to='/' className="menu__link">Home</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to='/about' className="menu__link">Sobre</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to='/newSeries' className="menu__link">Nova Serie</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
        
    }
}

export default Menu