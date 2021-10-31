import React from 'react';
import avatar from '../../assets/img/avatar.png';
import './home.css'
export const Home = () => {
    return (
        <div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mt-5">
                            <span className="text-blue">Hey,</span> <span className="title-principal"> Yo soy</span>
                        </h1>
                        <h1 className="display-1">
                            <span className="title-principal">Jose</span> <span className="text-blue"> Sanchez</span>
                        </h1>
                        <h2 className="subtitle">Desarrollador de Software</h2>
                        <div className="links-container">
                            <a className="btn btn-outline-primary">Descargar CV</a>
                            <a className="pl-2 btn btn-info text-white" >
                                Contactame</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="avatar">
                            <img src={avatar} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};