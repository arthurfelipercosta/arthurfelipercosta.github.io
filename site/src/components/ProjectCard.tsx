// src/components/ProjectCard.tsx

import { Link } from "react-router-dom";

type Project = {
    id: string;
    title: string;
    status: string;
    description: string;
    technologies: string[];
};

type Props = {
    project: Project;
    language: "pt" | "en";
};

export default function ProjectCard({ project, language }: Props) {
    return (
        <article className="project-card">
            <div className="project-card-top">
                <span className="project-status">{project.status}</span>
                <span className="project-arrow">↗</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
                {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
            </div>

            <Link className="project-link" to={`/projects/${project.id}`}>
                {language === "pt" ? "Ver projeto" : "View project"} →
            </Link>
        </article>
    );
}