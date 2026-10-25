// src/App.tsx

import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./styles/global.css";

export default function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <HashRouter>
      <Header
        language={language}
        onToggleLanguage={() => setLanguage((current) => current === "pt" ? "en" : "pt")}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/projects/:id" element={<Project language={language} />} />
          <Route path="/resume" element={
            <section className="section resume-placeholder">
              <h1>{language === "pt" ? "Currículo e Resume" : "CV & Résumé"}</h1>
              <p>{language === "pt" ? "Os documentos serão adicionados nesta etapa." : "Documents will be added in a later step."}</p>
            </section>
          } />
          <Route path="*" element={<section className="section"><h1>404</h1></section>} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Arthur Costa</footer>
    </HashRouter>
  );
}