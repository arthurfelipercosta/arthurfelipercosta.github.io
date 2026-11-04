// src/data/projects.ts

type ProjectScreenshots = {
    src: string;
    alt: {
        pt: string;
        en: string;
    };
};

export const projects = [
    {
        id: "toca-do-frango",
        title: "Toca do Frango",
        status: {
            pt: "Publicado",
            en: "Published"
        },
        description: {
            pt: "Cardápio digital com consulta de produtos e preços, carrinho de compras e envio do pedido pelo WhatsApp para finalização diretamente com o estabelecimento.",
            en: "Digital menu with product and price browsing, a shopping cart, and WhatsApp order sharing so customers can finalize their orders directly with the business."
        },
        highlights: {
            pt: [
                "Consulta de produtos e preços em um catálogo digital.",
                "Carrinho de compras e envio do pedido pelo WhatsApp.",
                "Painel administrativo para cadastrar, editar e excluir produtos.",
                "Configuração de horário de funcionamento, endereço e regiões de entrega.",
                "Gerenciamento de informações como WhatsApp",
                "Visualização das páginas de política de privacidade e termos de uso."
            ],
            en: [
                "Browse products and prices in a digital catalog.",
                "Shopping cart and order sharing through WhatsApp.",
                "Admin panel for adding and editing products.",
                "Configuration of business hours, address, and delivery areas.",
                "Management of information such as WhatsApp contact",
                "Viewing privacy policy and terms of service pages."
            ]
        },
        technologies: ["React Native", "TypeScript", "Firebase"],
        playStore: "https://play.google.com/store/apps/details?id=com.arthurfrc.tocadofrango",
        screenshots: [] as ProjectScreenshots[]
    },
    {
        id: "batecarga",
        title: "Calculadora BateCarga",
        status: {
            pt: "Publicado",
            en: "Published"
        },
        description: {
            pt: "Aplicativo mobile de cálculo desenvolvido para simplificar cálculos específicos de forma prática.",
            en: "Mobile calculator app designed to make specific calculations simpler and more practical."
        },
        highlights: {
            pt: [
                "Adição de diferentes pesos.",
                "Soma automática da quantidade de pesos e do peso total em kg.",
                "Cálculo do valor total com base no preço por quilograma informado.",
                "Salvamento e carregamento de listas de pesagens com títulos personalizados.",
                "Planos gratuito e pago com limites diferentes para pesos distintos e listas salvas.",
            ],
            en: [
                "Add different weights.",
                "Automatic calculation of weight count and total weight in kilograms.",
                "Total price calculation based on the entered price per kilogram.",
                "Save and reload weighing lists with custom titles.",
                "Free and paid plans with different limits for distinct weights and saved lists.",
            ]
        },
        technologies: ["React Native", "TypeScript"],
        playStore: "https://play.google.com/store/apps/details?id=com.arthurfrc.calculadora",
        screenshots: [] as ProjectScreenshots[]
    },
    {
        id: "calculadora-do-feirante",
        title: "Calculadora do Feirante",
        status: {
            pt: "Em desenvolvimento",
            en: "In development",
        },
        description: {
            pt: "Aplicativo mobile voltado a feirantes e pequenos comerciantes, com cadastro de produtos vendidos por unidade ou por quilograma, montagem da cesta de compras, cálculo automático do total e cálculo do troco a partir do valor recebido.",
            en: "A mobile app for market vendors and small merchants, featuring product registration with unit-based or per-kilogram pricing, shopping basket management, automatic total calculation, and change calculation based on the amount received.",
        },
        highlights: {
            pt: [
                "Cadastro de produtos com preço por unidade ou por quilograma.",
                "Adição de produtos à lista de compras e soma dos valores.",
                "Cálculo do total da compra.",
                "Informação do valor recebido e cálculo automático do troco.",
            ],
            en: [
                "Register products with unit-based or per-kilogram pricing.",
                "Add products to a shopping list and calculate their combined value.",
                "Calculate the purchase total.",
                "Enter the amount received and automatically calculate the change.",
            ],
        },
        technologies: ["React Native", "TypeScript"],
        playStore: "",
        screenshots: [] as ProjectScreenshots[]
    },
    {
        id: "tcc-pbev",
        title: "Assistente PBEV",
        status: {
            pt: "Projeto acadêmico",
            en: "Academic project",
        },
        description: {
            pt: "Assistente conversacional para consulta e comparação de veículos com base em dados do PBEV. Integra WhatsApp, Python, n8n, Twilio e Gemini para consultar informações estruturadas e gerar respostas em linguagem natural, complementado por uma interface web local para comparar veículos com filtros.",
            en: "A conversational assistant for querying and comparing vehicles using PBEV data. It integrates WhatsApp, Python, n8n, Twilio, and Gemini to retrieve structured information and generate natural-language responses, complemented by a local web interface for comparing vehicles using filters.",
        },
        highlights: {
            pt: [
                "Preparação de dados veiculares a partir de PDFs do PBEV, com limpeza manual no Excel e conversão para CSV.",
                "Consultas em Python sobre a base estruturada de veículos.",
                "Integração entre WhatsApp, Twilio, n8n e código Python para receber mensagens e enviar respostas.",
                "Uso do Gemini para formular respostas em linguagem natural sobre veículos individuais e comparações.",
                "Interface web local para comparar dois veículos.",
                "Filtros por marca, modelo e categoria para facilitar a seleção dos veículos.",
            ],
            en: [
                "Vehicle data preparation from PBEV PDFs, with manual cleaning in Excel and conversion to CSV.",
                "Python queries against the structured vehicle dataset.",
                "Integration of WhatsApp, Twilio, n8n, and Python code to receive messages and send responses.",
                "Use of Gemini to generate natural-language answers about individual vehicles and comparisons.",
                "Local web interface for comparing two vehicles.",
                "Brand, model, and category filters to simplify vehicle selection.",
            ],
        },
        technologies: ["Python", "n8n", "Twilio", "WhatsApp", "Gemini", "CSV", "Excel"],
        playStore: "",
        screenshots: [] as ProjectScreenshots[]
    }
];