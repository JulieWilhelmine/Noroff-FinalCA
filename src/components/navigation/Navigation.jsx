import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends React.Component {
    render() {
        return (

            <nav className="[ navbar ]" role="navigation">
                    <ul className="[ navbar-nav ml-auto ]">
                        <li className="[ nav-item ] [ navbar__links navbar__links--color ]">
                            <NavLink to="/cards-page">Cards</NavLink>
                        </li>
                        <li className="[ nav-item ] [ navbar__links navbar__links--color ]">
                            <NavLink to="/about-page">About</NavLink>
                        </li>
                        <li className="[ nav-item ] [ navbar__links navbar__links--color ]">
                            <NavLink to="/contact-page">Contact</NavLink>
                        </li>
                    </ul>
            </nav>
        )
    }
}