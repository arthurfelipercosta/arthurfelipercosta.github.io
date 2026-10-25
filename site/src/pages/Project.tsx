// src/pages/Project.tsx

import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

type Props = {
    language: "pt" | "en";
};

export default function Project({ language }: Props) {
    const { id } = useParams();
    const project = projects.find((item) => item.id === id);
    const en = language === "en";

    if (!project) {
        return (
            <section className="project-detail">
                <h1>{en ? "Project not found" : "Projeto não encontrado"}</h1>
                <Link className="text-link" to="/">
                    {en ? "Back home" : "Voltar ao início"}
                </Link>
            </section>
        );
    }

    return (
        <section className="project-detail">
            <Link className="text-link" to="/">
                ← {en ? "Back to portfolio" : "Voltar ao portfólio"}
            </Link>

            <span className="eyebrow">{project.status}</span>
            <h1>{project.title}</h1>
            <p className="detail-description">{project.description}</p>

            <h2>{en ? "Technologies" : "Tecnologias"}</h2>
            <div className="tags">
                {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
            </div>

            {project.playStore && (
                <a
                    className="button button-primary"
                    href={project.playStore}
                    target="_blank"
                    rel="noreferrer"
                >
                    {en ? "Get it on Google Play" : "Baixar na Google Play"} ↗
                </a>
            )}

            <p className="detail-note">
                {en
                    ? "More technical details and screenshots will be added here."
                    : "Mais detalhes técnicos e capturas de tela serão adicionados aqui."}
            </p>
        </section>
    );
}