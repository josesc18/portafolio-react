import { Skill } from "../../models/skill";
import { SkillService } from "../../services/skills.services";

export const Skills = () => {
    const skillList: Skill[] = SkillService.getAll();
    return (
        <div className="container px-4">
            <div className="row">
                {
                    skillList.map(skillItem => (
                        <div className="col-md-6">
                            <h5 className="subtitle">{skillItem.title}</h5>
                            <p className="text-break paragraph">
                                {skillItem.skills?.join(", ")}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};