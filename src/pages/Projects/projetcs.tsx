import { ProjectCards } from "../../components/project/project";
import './projects.css';
export const Projects = () => {
    return (
        <div className="container mt-5 px-5">
            <h1 className="title-gray text-center mb-5">“La imaginación es el límite”</h1>
            <div className="projetcs-section">
                <ProjectCards></ProjectCards>
            </div>
        </div>
    );
}