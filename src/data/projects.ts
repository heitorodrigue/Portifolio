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
      "Aplicação web para gerenciamento de chamados desenvolvida utilizando Flask, SQLAlchemy e Bulma durante projeto acadêmico.",

    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Bulma",
    ],

    github: "https://github.com/heitorodrigue/helpnow",

    featured: false,
  },
];