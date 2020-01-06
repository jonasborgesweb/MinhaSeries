import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component{
    render(){
        return <nav className="menu">
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
    }
}

export default Menu