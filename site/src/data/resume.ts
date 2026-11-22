// src/data/resume.ts

export interface ResumeContent {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
  }[];
  projects: {
    title: string;
    type: string;
    period: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  academicExperience: {
    title: string;
    institution: string;
    location: string;
    description: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  languages: {
    language: string;
    level: string;
  }[];
}

export const resumeData: Record<"pt" | "en", ResumeContent> = {
  pt: {
    name: "Arthur Felipe Rodrigues Costa",
    title: "Software Developer | React Native | TypeScript | Python",
    summary: "Desenvolvedor de Software com experiência profissional desde 2022 atuando no desenvolvimento de aplicações mobile com integração de sistemas e automação de processos. Experiência com React Native, TypeScript, Python e APIs REST em ambientes de produção, incluindo publicação de aplicativos na Google Play Store. Atuação em manutenção, evolução e entrega de funcionalidades para sistemas corporativos e produtos digitais.",
    contact: {
      email: "arthurfelipercosta@gmail.com",
      phone: "+55 (84) 99939 7770",
      location: "Parnamirim, RN, Brasil",
      github: "github.com/arthurfelipercosta",
      linkedin: "linkedin.com/in/arthurfrc"
    },
    experience: [
      {
        title: "Desenvolvedor de Software",
        company: "Corps Teknologi",
        period: "08/2022 - 05/2026",
        location: "Natal, RN, Brasil",
        description: [
          "Desenvolvimento e manutenção de aplicações mobile utilizando React Native e TypeScript em ambiente corporativo",
          "Implementação de integrações com APIs REST para comunicação entre aplicações e sistemas backend",
          "Desenvolvimento de scripts em Python para automação de processos internos e redução de tarefas manuais",
          "Implementação de fluxos de autenticação e sincronização de dados em aplicações em produção",
          "Participação na manutenção e evolução de aplicações desenvolvidas com React e TypeScript, atuando na implementação de melhorias visuais, correção de problemas de interface e validação de funcionalidades",
          "Identificação e análise de problemas em aplicações web e mobile, contribuindo para a validação de funcionalidades e melhoria da estabilidade dos sistemas",
          "Desenvolvimento e customização de landing pages em WordPress, incluindo instalação, configuração, ajustes de interface e manutenção de conteúdo",
          "Atuação na manutenção e evolução de sistemas utilizados em processos operacionais da empresa",
          "Colaboração com equipe técnica e stakeholders na entrega de funcionalidades e resolução de problemas"
        ]
      }
    ],
    projects: [
      {
        title: "Aplicativo Toca do Frango",
        type: "Aplicativo Mobile - Projeto Pessoal - Google Play Store",
        period: "11/2025 - 04/2026",
        description: [
          "Desenvolvimento e publicação de aplicativo mobile utilizando React Native, TypeScript e Expo",
          "Implementação de navegação, persistência de dados e regras de negócio da aplicação",
          "Responsável pelo ciclo completo do produto: desenvolvimento, testes, publicação e manutenção"
        ]
      },
      {
        title: "Calculadora BateCarga",
        type: "Aplicativo Mobile - Projeto pessoal - Google Play Store",
        period: "04/2026 - 10/2026",
        description: [
          "Desenvolvimento de aplicativo mobile para cálculos operacionais utilizando React Native, TypeScript e Expo",
          "Implementação de regras de negócio, lógica de cálculo e interface de usuário"
        ]
      }
    ],
    education: [
      {
        degree: "Engenharia da Computação",
        institution: "UFRN",
        period: "2021 - 2025"
      },
      {
        degree: "Bacharelado em Ciência e Tecnologia",
        institution: "UFRN",
        period: "2013 - 2019"
      },
      {
        degree: "Técnico em Informática",
        institution: "IFRN",
        period: "2009 - 2012"
      }
    ],
    academicExperience: [
      {
        title: "Monitor de Lógica e Linguagem de Programação",
        institution: "UFRN",
        location: "Natal, RN, Brasil",
        description: [
          "Apoio acadêmico a aproximadamente 200 estudantes em disciplinas de Lógica de Programação e Algoritmos",
          "Atendimento individual e em grupo para resolução de exercícios e dúvidas técnicas",
          "Apoio no entendimento de conceitos fundamentais de programação e estruturação de lógica computacional",
          "Contribuição para acompanhamento do desempenho acadêmico e identificação de dificuldades recorrentes"
        ]
      }
    ],
    skills: [
      {
        category: "Desenvolvimento Mobile / Front-end",
        items: ["React Native", "React", "TypeScript", "JavaScript", "Desenvolvimento de interfaces"]
      },
      {
        category: "Backend / Integração",
        items: ["Python", "APIs REST", "Integração de sistemas", "JSON"]
      },
      {
        category: "Dados e Persistência",
        items: ["SQL", "SQLite", "Firebase"]
      },
      {
        category: "Ferramentas",
        items: ["Git", "Azure DevOps", "Power BI", "Insomnia"]
      }
    ],
    languages: [
      {
        language: "Português",
        level: "Nativo"
      },
      {
        language: "Inglês",
        level: "Intermediário"
      }
    ]
  },
  en: {
    name: "Arthur Felipe Rodrigues Costa",
    title: "Software Developer | React Native | TypeScript | Python",
    summary: "Software Developer with professional experience since 2022 working on mobile application development with system integration and process automation. Experience with React Native, TypeScript, Python and REST APIs in production environments, including app publication on Google Play Store. Work on maintenance, evolution and delivery of features for corporate systems and digital products.",
    contact: {
      email: "arthurfelipercosta@gmail.com",
      phone: "+55 (84) 99939 7770",
      location: "Parnamirim, RN, Brazil",
      github: "github.com/arthurfelipercosta",
      linkedin: "linkedin.com/in/arthurfrc"
    },
    experience: [
      {
        title: "Software Developer",
        company: "Corps Teknologi",
        period: "08/2022 - 05/2026",
        location: "Natal, RN, Brazil",
        description: [
          "Development and maintenance of mobile applications using React Native and TypeScript in corporate environment",
          "Implementation of integrations with REST APIs for communication between applications and backend systems",
          "Development of Python scripts for automation of internal processes and reduction of manual tasks",
          "Implementation of authentication flows and data synchronization in production applications",
          "Participation in maintenance and evolution of applications developed with React and TypeScript, working on visual improvements, interface issues and feature validation",
          "Identification and analysis of problems in web and mobile applications, contributing to feature validation and system stability improvement",
          "Development and customization of landing pages in WordPress, including installation, configuration, interface adjustments and content maintenance",
          "Work on maintenance and evolution of systems used in company operational processes",
          "Collaboration with technical team and stakeholders in feature delivery and problem resolution"
        ]
      }
    ],
    projects: [
      {
        title: "Toca do Frango App",
        type: "Mobile App - Personal Project - Google Play Store",
        period: "11/2025 - 04/2026",
        description: [
          "Development and publication of mobile application using React Native, TypeScript and Expo",
          "Implementation of navigation, data persistence and business rules of the application",
          "Responsible for the complete product cycle: development, testing, publication and maintenance"
        ]
      },
      {
        title: "BateCarga Calculator",
        type: "Mobile App - Personal Project - Google Play Store",
        period: "04/2026 - 10/2026",
        description: [
          "Development of mobile application for operational calculations using React Native, TypeScript and Expo",
          "Implementation of business rules, calculation logic and user interface"
        ]
      }
    ],
    education: [
      {
        degree: "Computer Engineering",
        institution: "UFRN",
        period: "2021 - 2025"
      },
      {
        degree: "Bachelor of Science and Technology",
        institution: "UFRN",
        period: "2013 - 2019"
      },
      {
        degree: "Information Technology Technician",
        institution: "IFRN",
        period: "2009 - 2012"
      }
    ],
    academicExperience: [
      {
        title: "Logic and Programming Language Monitor",
        institution: "UFRN",
        location: "Natal, RN, Brazil",
        description: [
          "Academic support to approximately 200 students in Logic of Programming and Algorithms disciplines",
          "Individual and group assistance for solving exercises and technical doubts",
          "Support in understanding fundamental programming concepts and computational logic structuring",
          "Contribution to academic performance monitoring and identification of recurring difficulties"
        ]
      }
    ],
    skills: [
      {
        category: "Mobile / Front-end Development",
        items: ["React Native", "React", "TypeScript", "JavaScript", "Interface Development"]
      },
      {
        category: "Backend / Integration",
        items: ["Python", "REST APIs", "System Integration", "JSON"]
      },
      {
        category: "Data & Persistence",
        items: ["SQL", "SQLite", "Firebase"]
      },
      {
        category: "Tools",
        items: ["Git", "Azure DevOps", "Power BI", "Insomnia"]
      }
    ],
    languages: [
      {
        language: "Portuguese",
        level: "Native"
      },
      {
        language: "English",
        level: "Intermediate"
      }
    ]
  }
};
