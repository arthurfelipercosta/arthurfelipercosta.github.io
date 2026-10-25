// src/pages/Home.tsx

import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

type Props = {
    language: "pt" | "en";
};

export default function Home({ language }: Props) {
    const en = language === "en";

    return (
        <>
            <section className="hero">
                <div className="eyebrow">
                    <span className="availability-dot" />
                    {en ? "SOFTWARE DEVELOPER" : "DESENVOLVEDOR DE SOFTWARE"}
                </div>

                <h1>
                    {en ? "Building digital solutions for real problems." : "Transformando problemas reais em soluções digitais."}
                </h1>

                <p className="hero-description">
                    {en
                        ? "I'm a software developer focused on mobile applications, integrations and automation."
                        : "Sou desenvolvedor de software com foco em aplicativos mobile, integrações e automações."}
                </p>

                <div className="hero-actions">
                    <a className="button button-primary" href="#projects">
                        {en ? "Explore projects" : "Explorar projetos"} ↓
                    </a>
                    <a className="button button-secondary" href="#contact">
                        {en ? "Get in touch" : "Entrar em contato"} ↗
                    </a>
                </div>

                <div className="hero-tech">
                    <span>React Native</span><span>TypeScript</span><span>Python</span><span>REST APIs</span>
                </div>
            </section>

            <section id="projects" className="section">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">{en ? "SELECTED WORK" : "TRABALHOS SELECIONADOS"}</span>
                        <h2>{en ? "Featured projects" : "Projetos em destaque"}</h2>
                    </div>
                    <span className="section-count">04 / 04</span>
                </div>

                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} language={language} />
                    ))}
                </div>
            </section>

            <section id="about" className="section about-section">
                <span className="eyebrow">{en ? "ABOUT ME" : "SOBRE MIM"}</span>
                <h2>{en ? "Software development with a practical mindset." : "Desenvolvimento de software com foco em soluções práticas."}</h2>
                <p>
                    {en
                        ? "Computer Engineering graduate from UFRN, with experience developing mobile applications, maintaining production software and building integrations and automations."
                        : "Graduado em Engenharia da Computação pela UFRN, com experiência no desenvolvimento de aplicativos mobile, manutenção de software em produção e criação de integrações e automações."}
                </p>
                <Link className="text-link" to="/resume">
                    {en ? "View résumé" : "Ver currículo e resume"} →
                </Link>
            </section>

            <section id="contact" className="contact-section">
                <span className="eyebrow">{en ? "CONTACT" : "CONTATO"}</span>
                <h2>{en ? "Let's build something useful." : "Vamos construir algo útil."}</h2>
                <p>{en ? "Find me on GitHub and LinkedIn." : "Encontre meus projetos e minha trajetória profissional."}</p>
                <div className="contact-links">
                    <a href="https://github.com/arthurfelipercosta" target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href="https://www.linkedin.com/in/arthurfrc/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                </div>
            </section>
        </>
    );
}