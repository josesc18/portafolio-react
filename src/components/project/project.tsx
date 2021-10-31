import { Project as ProjectModel } from "../../models/project";
import { ProjectService } from "../../services/project.services";

export const ProjectCards = () => {

    const ProjectList: ProjectModel[] = ProjectService.getAllProjects();

    return (
        <div className="mb-5 pb-5">
            <div className="row">
                {
                    ProjectList.map(
                        skillItem => (
                            <div className="col-md-6 mb-3">
                                <div className="card">
                                    <img src={skillItem.img} className="card-img-top" alt={skillItem.title} />
                                    <div className="card-body">
                                        <h4>{skillItem.title}</h4>
                                        <p className="card-text red-hat-text">{skillItem.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}