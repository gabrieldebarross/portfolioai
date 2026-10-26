import type { Dictionary } from "./pt";

export const en: Dictionary = {
  meta: {
    title: "Gabriel Barros — Full-Stack Developer",
    description:
      "Full-stack developer based in Brazil. I study and build web applications end to end with TypeScript, Node.js, Next.js and MySQL.",
    ogAlt: "Gabriel Barros — Full-Stack Developer",
    keywords: [
      "Gabriel Barros",
      "full-stack developer",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MySQL",
      "portfolio",
    ],
  },
  nav: {
    work: "Work",
    about: "About",
    stack: "Stack",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    command: "Search",
    theme: "Toggle theme",
    language: "Switch language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Gabriel Barros — Full-Stack Developer",
    titleTop: "I learn by building applications",
    titleAccent: "front to back.",
    lead: "Full-stack developer in training. I study and build complete projects — interface, API, database and the details in between.",
    primaryCta: "View work",
    secondaryCta: "Get in touch",
    scroll: "Scroll to explore",
    card: {
      label: "Featured project",
      value: "TramitaY",
      description: "Public procurement, from database to interface.",
      status: "In progress",
    },
    facts: [
      { label: "Discipline", value: "Front-end & back-end" },
      { label: "Studying", value: "TypeScript & Node" },
      { label: "Available", value: "Remote" },
    ],
    available: "Open to new projects",
  },
  marquee: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "MySQL",
    "Tailwind CSS",
    "Docker",
    "PHP",
    "Git",
  ],
  stats: [
    { value: "10", label: "public repositories" },
    { value: "05", label: "full-stack projects" },
    { value: "02", label: "sides: front & back" },
    { value: "01", label: "developer in progress" },
  ],
  work: {
    label: "01 / Selected work",
    title: "Studies that became complete projects.",
    lead: "Most of them are self-directed studies — but all were built end to end, from the data model to the interface.",
    all: "See everything on GitHub",
    view: "View project",
    caseStudy: "Read case study",
    items: {
      tramitay: {
        title: "TramitaY",
        tagline:
          "A platform to manage public procurement: stages, owners, deadlines and history.",
        meta: "Study · Full-stack",
        detail:
          "Monorepo with a Next.js frontend and a layered Express API, RBAC, approval workflows and an audit trail for every stage.",
      },
      devacademy: {
        title: "DevAcademy",
        tagline:
          "Admin panel for a tech school: courses, instructors, categories and enrollments.",
        meta: "Study · Full-stack",
        detail:
          "REST API with JWT auth, Next.js 15 on the front and Docker + Nginx orchestrating the whole environment.",
      },
      stockflow: {
        title: "StockFlow",
        tagline:
          "Inventory, products and sales management with a KPI dashboard and low-stock alerts.",
        meta: "Study · Full-stack",
        detail:
          "Business rules pushed into the database: views, CTEs, stored procedures, functions and triggers keep operations consistent.",
      },
      cis: {
        title: "CIS Refactor",
        tagline:
          "A full refactor of a corporate website focused on structure, performance and responsiveness.",
        meta: "Study · Front-end",
        detail:
          "Layout and components rebuilt with Next.js + Tailwind, without inheriting the debt of the original project.",
      },
      apitask: {
        title: "api_task",
        tagline:
          "A REST API lab to study authentication, security, testing and observability.",
        meta: "Study · Backend",
        detail:
          "Incremental evolution from a simple CRUD toward production: JWT, validation, Docker, Redis and logging.",
      },
    },
  },
  about: {
    label: "02 / About",
    title: "I like understanding the whole application.",
    paragraphs: [
      "I'm Gabriel Barros, a full-stack developer. I work with TypeScript end to end: Next.js and React on the interface, Node.js and Express on the API, MySQL underneath.",
      "I'm still studying — and I like that. I started with front-end and the basics, then moved on to frameworks and libraries like React and Next.js. Now I'm studying TypeScript with Node.js and the rest of the back-end stack.",
      "My interest is in making the whole application make sense: the screen, the API and the data talking to each other. That's what I keep practising in every project.",
    ],
    factsLabel: "At a glance",
    facts: [
      { label: "Discipline", value: "Front-end & back-end" },
      { label: "Current focus", value: "TypeScript & Node.js" },
      { label: "Studying", value: "Architecture and testing" },
      { label: "Availability", value: "Remote" },
      { label: "Languages", value: "Portuguese · Technical English" },
    ],
    monogramCaption: "GB / 2026",
    monogramNote: "Full-stack developer",
    portraitAlt: "Pixel-art portrait of Gabriel Barros",
  },
  toolkit: {
    label: "03 / Stack",
    title: "Tools I use day to day.",
    lead: "What shows up in the projects — and what I'm studying next.",
    groups: [
      {
        index: "01",
        title: "Frontend",
        items: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "JavaScript",
          "Semantic HTML",
          "Accessibility",
        ],
      },
      {
        index: "02",
        title: "Backend",
        items: [
          "Node.js",
          "Express",
          "TypeORM",
          "Sequelize",
          "REST",
          "JWT",
          "PHP",
        ],
      },
      {
        index: "03",
        title: "Data",
        items: [
          "MySQL",
          "Relational modelling",
          "SQL",
          "Views & procedures",
          "Indexes",
          "Redis (learning)",
        ],
      },
      {
        index: "04",
        title: "Infra & tools",
        items: [
          "Git & GitHub",
          "Docker",
          "Nginx",
          "Vercel",
          "Postman",
          "Figma",
        ],
      },
    ],
  },
  contact: {
    label: "04 / Contact",
    title: "Let's build something together?",
    lead: "Open to opportunities, freelance work and conversations about front-end, back-end and learning by doing.",
    emailLabel: "Copy email",
    copied: "Copied",
    emailCta: "Send an email",
    availability: "I reply within 24h",
    socials: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  footer: {
    tagline: "Software that organises real work.",
    localTime: "Local time",
    builtWith: "Built with Next.js and Tailwind",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    sections: "Navigation",
    elsewhere: "Elsewhere",
  },
  palette: {
    placeholder: "Jump to a section, project or link…",
    empty: "Nothing here.",
    hint: "↑↓ navigate · ↵ open · esc close",
    sections: "Sections",
    projects: "Projects",
    actions: "Actions",
    toggleTheme: "Toggle theme",
    switchLanguage: "Mudar para Português",
  },
  caseStudy: {
    eyebrow: "Case study · 01",
    title: "TramitaY",
    subtitle:
      "A platform to manage public procurement — from the data model to the approval workflow.",
    back: "All projects",
    meta: [
      { label: "Role", value: "Full-stack" },
      { label: "Type", value: "Applied study" },
      { label: "Status", value: "In progress" },
      { label: "Stack", value: "Next.js · Express · MySQL" },
    ],
    links: {
      repo: "View repository",
      live: "View system",
    },
    sections: {
      context: {
        label: "01 / Context",
        title: "Public management runs on process.",
        body: [
          "The starting point was the procurement process of a municipal authority: stages in different folders, deadlines in emails and no consolidated view of who owned what.",
          "TramitaY is an internal management tool — it does not replace legal review or official portals. Its goal is to give the process structure: every stage, owner, deadline and change recorded in one place.",
        ],
      },
      problem: {
        label: "02 / Problem",
        title: "The process existed. Visibility didn't.",
        points: [
          "Stages and deadlines scattered across spreadsheets, emails and people's memory.",
          "No way to know the real status of a process without asking someone.",
          "Fragile history: decisions and changes without a reliable record.",
          "Informal permissions — everyone could see and edit everything.",
        ],
      },
      approach: {
        label: "03 / Approach",
        title: "Domain first, screen second.",
        body: "Before writing any interface, I modelled the process. The system is a monorepo with a decoupled frontend and backend, and the backend follows explicit layers so business rules never leak into controllers.",
        layers: [
          { title: "Next.js", subtitle: "App Router", note: "Interface and states" },
          { title: "Express", subtitle: "REST API", note: "Routes and middleware" },
          { title: "Services", subtitle: "Domain", note: "Rules and workflows" },
          { title: "Repositories", subtitle: "Data access", note: "Sequelize" },
          { title: "MySQL", subtitle: "Persistence", note: "Migrations and seeds" },
        ],
        note: "Every layer has one responsibility and a testable boundary. That keeps the approval flow predictable even when the process changes.",
      },
      decisions: {
        label: "04 / Decisions",
        title: "Choices that hold the system up.",
        items: [
          {
            title: "Layered backend",
            body: "Routes → middleware → controllers → services → domain → repositories → models. Business rules stay testable and independent from HTTP.",
          },
          {
            title: "RBAC from day one",
            body: "Roles and permissions modelled alongside the domain, not bolted on as an afterthought. Every sensitive action has an explicit authorisation check.",
          },
          {
            title: "Workflow with history",
            body: "Stages and transitions are data, not scattered conditionals. The history records who changed what and when.",
          },
          {
            title: "TypeScript end to end",
            body: "Contracts shared between front and back reduce integration errors and document the intent of the domain.",
          },
        ],
      },
      result: {
        label: "05 / Result",
        title: "A foundation built to evolve.",
        body: [
          "The system is being delivered in incremental phases, with architecture, domain, RBAC and workflow documentation versioned alongside the code. Each phase ships a complete flow instead of isolated screens.",
          "The biggest lesson wasn't technical: in management software, understanding the process matters more than picking the fashionable library.",
        ],
        facts: [
          { label: "Architecture", value: "Decoupled monorepo" },
          { label: "Security", value: "JWT + RBAC" },
          { label: "Database", value: "MySQL with migrations" },
          { label: "Documentation", value: "docs/ + AGENTS.md" },
        ],
      },
    },
    next: {
      label: "Keep exploring",
      title: "See all projects",
      href: "/#work",
    },
  },
  notFound: {
    eyebrow: "Error 404",
    title: "This page didn't pass the approval flow.",
    body: "The address you tried to open doesn't exist — or it moved to another stage.",
    cta: "Back to home",
  },
};
