import { Project } from "../models/project"

export class ProjectService {

    static getAllProjects(): Project[] {
        return [
            {
                id: 2,
                title: "Sistema de inventario",
                description: "Desarrollado bajo las tecnologias de Django, bootstrap, JavaScript y html.",
                img: "https://josesc18.github.io/portafolio/assets/img/Sistema-de-inventario-2.png"
            },
            {
                id: 3,
                title: "Sistema de ventas e inventario",
                description: "Sistemas diseñado para cubrir las necesidades de este pequeño emprendimiento",
                img: "https://josesc18.github.io/portafolio/assets/img/Sistema-de-inventario.png"
            },
        ]
    };
}