// src/components/Header.tsx

import { Link } from "react-router-dom";

type HeaderProps = {
    language: "pt" | "en";
    onToggleLanguage: () => void;
};

export default function Header({ language, onToggleLanguage }: HeaderProps) {
    const en = language === "en";

    return (
        <header className="header">
            <Link to="/" className="brand">Arthur Costa<span>.</span></Link>

            <nav>
                <a href="/#projects">{en ? "Projects" : "Projetos"}</a>
                <a href="/#about">{en ? "About" : "Sobre mim"}</a>
                <a href="/#contact">{en ? "Contact" : "Contato"}</a>
            </nav>

            <button className="language-button" onClick={onToggleLanguage}>
                {en ? "PT-BR" : "EN"}
            </button>
        </header>
    );
}