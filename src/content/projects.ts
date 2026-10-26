export type ProjectVariant =
  | "tramitay"
  | "devacademy"
  | "stockflow"
  | "cis"
  | "apitask";

export type ProjectMeta = {
  slug: string;
  name: string;
  variant: ProjectVariant;
  stack: string[];
  /** Internal case study path, without locale. */
  caseStudy?: string;
  repo: string;
  live?: string;
};

export const projects: ProjectMeta[] = [
  {
    slug: "tramitay",
    name: "TramitaY",
    variant: "tramitay",
    stack: ["Next.js", "Express", "TypeScript", "MySQL"],
    caseStudy: "/work/tramitay",
    repo: "https://github.com/gabrieldebarross/sistemalicitacao",
  },
  {
    slug: "devacademy",
    name: "DevAcademy",
    variant: "devacademy",
    stack: ["Next.js 15", "TypeORM", "Docker", "Nginx"],
    repo: "https://github.com/gabrieldebarross/DevAcademy-TechAcademy4",
  },
  {
    slug: "stockflow",
    name: "StockFlow",
    variant: "stockflow",
    stack: ["PHP", "MySQL", "Bootstrap"],
    repo: "https://github.com/gabrieldebarross/Stockflow-Tech3",
    live: "https://stockflow.unaux.com/public/index.php",
  },
  {
    slug: "cis",
    name: "CIS Refactor",
    variant: "cis",
    stack: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/gabrieldebarross/cis-refactor",
    live: "https://cis-eta.vercel.app/",
  },
  {
    slug: "apitask",
    name: "api_task",
    variant: "apitask",
    stack: ["Node.js", "Express", "TypeScript"],
    repo: "https://github.com/gabrieldebarross/api_task",
  },
];
