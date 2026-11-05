// src/pages/Resume.tsx

import { resumeData } from "../data/resume";

type Props = {
    language: "pt" | "en";
};

export default function Resume({ language }: Props) {
    const data = resumeData[language];
    const en = language === "en";

    return (
        <section className="section resume-section">
            <div className="resume-header">
                <h1>{data.name}</h1>
                <h2 className="resume-title">{data.title}</h2>
                <p className="resume-summary">{data.summary}</p>
            </div>

            <div className="resume-contact">
                <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                <span>{data.contact.location}</span>
                <a href={`https://${data.contact.github}`} target="_blank" rel="noreferrer">{data.contact.github}</a>
                <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noreferrer">{data.contact.linkedin}</a>
            </div>

            <div className="resume-section-block">
                <h3>{en ? "Experience" : "Experiência"}</h3>
                {data.experience.map((exp, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <h4>{exp.title}</h4>
                            <span className="resume-item-period">{exp.period}</span>
                        </div>
                        <div className="resume-item-subheader">
                            <span className="resume-item-company">{exp.company}</span>
                            <span className="resume-item-location">{exp.location}</span>
                        </div>
                        <ul className="resume-item-description">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="resume-section-block">
                <h3>{en ? "Projects" : "Projetos"}</h3>
                {data.projects.map((project, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <h4>{project.title}</h4>
                            <span className="resume-item-period">{project.period}</span>
                        </div>
                        <div className="resume-item-subheader">
                            <span className="resume-item-type">{project.type}</span>
                        </div>
                        <ul className="resume-item-description">
                            {project.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="resume-section-block">
                <h3>{en ? "Education" : "Educação"}</h3>
                {data.education.map((edu, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <h4>{edu.degree}</h4>
                            <span className="resume-item-period">{edu.period}</span>
                        </div>
                        <div className="resume-item-subheader">
                            <span className="resume-item-institution">{edu.institution}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="resume-section-block">
                <h3>{en ? "Academic Experience" : "Experiência Acadêmica"}</h3>
                {data.academicExperience.map((academic, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <h4>{academic.title}</h4>
                        </div>
                        <div className="resume-item-subheader">
                            <span className="resume-item-institution">{academic.institution}</span>
                            <span className="resume-item-location">{academic.location}</span>
                        </div>
                        <ul className="resume-item-description">
                            {academic.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="resume-section-block">
                <h3>{en ? "Skills" : "Habilidades"}</h3>
                <div className="resume-skills">
                    {data.skills.map((skillGroup, index) => (
                        <div key={index} className="skill-group">
                            <h4>{skillGroup.category}</h4>
                            <div className="skill-items">
                                {skillGroup.items.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="resume-section-block">
                <h3>{en ? "Languages" : "Idiomas"}</h3>
                <div className="resume-languages">
                    {data.languages.map((lang, index) => (
                        <div key={index} className="language-item">
                            <span className="language-name">{lang.language}</span>
                            <span className="language-level">{lang.level}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="resume-downloads">
                <a
                    href={en ? "/resume.pdf" : "/curriculo.pdf"}
                    download
                    className="button button-primary"
                >
                    {en ? "Download PDF" : "Baixar PDF"}
                </a>
            </div>
        </section>
    );
}
