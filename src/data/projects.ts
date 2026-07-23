import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "LarFix",

    description:
      "Sistema de controle financeiro residencial desenvolvido com ASP.NET Core, React e SQLite. Permite o gerenciamento de pessoas, receitas, despesas e geração de resumos financeiros.",

    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "SQLite",
    ],

    github: "https://github.com/heitorodrigue/LarFix",

    featured: true,
  },

  {
    title: "HelpNOW",

    description:
    "Marketplace que conecta clientes a prestadores de serviços domésticos sem intermediários. Desenvolvido com Flask (padrão Application Factory), SQLAlchemy e Jinja2, contando com autenticação de perfis distintos, fluxo completo de chamados, validação com WTForms e testes automatizados.",

    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "WTForms",
      "Bulma CSS",
      "Jinja2",
      "Pytest",
      "SQLite"
    ],

    github: "https://github.com/heitorodrigue/helpnow",

    featured: false,
  },
];