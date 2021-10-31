import { Skill } from "../models/skill"

export class SkillService {

    static getAll(): Skill[] {

        return [
            {
                title: "Frontend",
                skills: ["Html5", "Css3", "Bootstrap", "JavaScript", "Jquery"]
            },
            {
                title: "Backend",
                skills: ["Python 3.X", "Django 3.X", "PHP 7.X", "Laravel 8"]
            },
            {
                title: "Bases de Datos",
                skills: ["MySQL", "MS SQL Server", "Postgress"]
            },
            {
                title: "Cloud",
                skills: ["Azure Webapps", "AWS SES"]
            },
            {
                title: "Sistemas Operativos",
                skills: ["Windows", "Linux/Ubuntu"]
            },
            {
                title: "Otros",
                skills: ["Git", "GitHub", "Trello", "Insomnia", "Scrum"]
            }
        ]

    };

}