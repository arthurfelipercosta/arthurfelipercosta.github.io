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
                <Link to="/#projects">{en ? "Projects" : "Projetos"}</Link>
                <Link to="/#about">{en ? "About" : "Sobre mim"}</Link>
                <Link to="/#contact">{en ? "Contact" : "Contato"}</Link>
            </nav>

            <button className="language-button" onClick={onToggleLanguage}>
                {en ? "PT-BR" : "EN"}
            </button>
        </header>
    );
}