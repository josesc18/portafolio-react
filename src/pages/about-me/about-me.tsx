import React from 'react';
import './about-me.css';
import { Skills } from '../../components/skills/skills';

export const AboutMe = () => {
    return (
        <div className="container mt-5 px-5">
            <div className="profile d-flex">
                <div className="profile-img">
                    <img src="https://josesc18.github.io/portafolio/assets/img/profile.jpg" alt="porfile-image" />
                </div>
                <div className="d-flex flex-column bd-highlight mb-3">
                    <hr className="line" />
                    <h1 className="px-2 title-principal">Jose Sanchez</h1>
                    <span className="px-2 subtitle">Desarrollador de software - Freelance </span>
                </div>
            </div>

            <section>
                <h3 className="title-principal">¿Quien soy?</h3>
                <p className="text-break paragraph lh-base">
                    Me gusta invertir tiempo en trabajos autónomos y en mis proyectos.
                    Disfruto desarrollando páginas web con un estilo sencillo pero atractivo.
                    Si tienes un proyecto y te gustaría contar conmigo, no dudes en contactar conmigo para trabajar juntos.
                </p>
            </section>
            <section className="skills-section mb-5 pb-5">
                <h3 className="title-principal">Habilidades</h3>
                <div className="container">
                    <Skills></Skills>
                </div>
            </section>
        </div>
    );
};