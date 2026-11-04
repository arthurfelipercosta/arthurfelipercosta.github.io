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

    const highlights = project.highlights[language];
    const screenshots = project.screenshots;

    return (
        <section className="project-detail">
            <Link className="text-link" to="/">
                ← {en ? "Back to portfolio" : "Voltar ao portfólio"}
            </Link>

            <span className="eyebrow">{project.status[language]}</span>
            <h1>{project.title}</h1>

            <div className="detail-section">
                <h2>{en ? "Overview" : "Visão geral"}</h2>
                <p className="detail-description">
                    {project.description[language]}
                </p>
            </div>

            {highlights.length > 0 && (
                <div className="detail-section">
                    <h2>{en ? "Key features" : "Principais funcionalidades"}</h2>
                    <ul className="detail-highlights">
                        {highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="detail-section">
                <h2>{en ? "Technologies" : "Tecnologias"}</h2>
                <div className="tags">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            </div>

            {screenshots.length > 0 && (
                <div className="detail-section">
                    <h2>{en ? "Screenshots" : "Capturas de tela"}</h2>
                    <div className="detail-gallery">
                        {screenshots.map((screenshot) => (
                            <figure key={screenshot.src}>
                                <img
                                    src={screenshot.src}
                                    alt={screenshot.alt[language]}
                                    loading="lazy"
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            )}

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
        </section>
    );
}