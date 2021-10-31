import React from 'react';
import './navbar.css';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
            <div className="container">
                <a className="navbar-brand" href="/inicio">Jose Sanchez</a>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/inicio" >Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/acerca-de-mi" >Acerca de mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/proyectos">Proyectos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};