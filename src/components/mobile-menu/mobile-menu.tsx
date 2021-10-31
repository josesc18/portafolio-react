import React from 'react';
import './mobile-menu.css';
export const MobileMenu = () => {
    return (
        <div className="fixed-mobile-menu">
            <div className="menu-container">
                <ul className="menu-list-mobile border-top">
                    <a href="/inicio" >
                        <li>
                            <i className="fas fa-home"></i>
                            <p className="center">Inicio</p>
                        </li>
                    </a>
                    <a href="/acerca-de-mi">
                        <li>
                            <span className="mx-4"><i className="fab fa-sistrix"></i></span>
                            <p>Acerca de mi</p>
                        </li>
                    </a>
                    <a href="/proyectos">
                        <li>
                            <span className="mx-4"><i className="far fa-bell"></i></span>
                            <p className="center">Proyectos</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
};