export const site = {
  name: "Gabriel Barros",
  shortName: "GB",
  role: {
    pt: "Desenvolvedor Full-Stack",
    en: "Full-Stack Developer",
  },
  email: "gabrieldebarros_@hotmail.com",
  github: "https://github.com/gabrieldebarross",
  linkedin: "https://www.linkedin.com/in/gabrieldebarros",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabrieldebarros.vercel.app",
  location: {
    pt: "Brasil — Remoto",
    en: "Brazil — Remote",
  },
  timezone: "America/Sao_Paulo",
} as const;
