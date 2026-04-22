const ptBR = {
  nav: {
    home: 'Início',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
    languageSwitcher: 'Alternar idioma',
    pt: 'PT',
    en: 'EN',
  },
  header: {
    greeting: 'Olá, eu sou a',
    name: 'Geórgia Carin',
    role: 'Desenvolvedora Frontend e Designer UX apaixonada por criar experiências digitais únicas e intuitivas.',
    photoAlt: 'Foto de perfil - Georgia Carin',
  },
  skills: {
    title: 'Minhas Habilidades',
    subtitle: 'Aqui estão algumas das minhas habilidades técnicas:',
  },
  projects: {
    title: 'Meus Projetos',
    subtitle: 'Confira alguns dos projetos que desenvolvi:',
  },
  footer: {
    createdBy: 'Criado por',
    rightsReserved: '(c) {{year}} Todos os direitos reservados',
  },
  theme: {
    lightMode: 'Modo claro',
    darkMode: 'Modo escuro',
  },
  social: {
    github: 'GitHub',
    linkedIn: 'LinkedIn',
  },
  cta: {
    viewDesign: 'protótipo',
    viewFigma: 'Figma',
    viewRepository: 'Repositório',
    viewLive: 'Site',
  },
}

const enUS = {
  nav: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    languageSwitcher: 'Switch language',
    pt: 'PT',
    en: 'EN',
  },
  header: {
    greeting: 'Hi, I am',
    name: 'Geórgia Carin',
    role: 'Frontend Developer and UX Designer passionate about creating unique and intuitive digital experiences.',
    photoAlt: 'Profile photo - Georgia Carin',
  },
  skills: {
    title: 'My Skills',
    subtitle: 'Here are some of my technical skills:',
  },
  projects: {
    title: 'My Projects',
    subtitle: 'Check out some of the projects I developed:',
  },
  footer: {
    createdBy: 'Created by',
    rightsReserved: '(c) {{year}} All rights reserved',
  },
  theme: {
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
  },
  social: {
    github: 'GitHub',
    linkedIn: 'LinkedIn',
  },
  cta: {
    viewDesign: 'View Design',
    viewFigma: 'Figma',
    viewRepository: 'Repository',
    viewLive: 'Live Site',
  },
}

export const resources = {
  'pt-BR': { translation: ptBR },
  pt: { translation: ptBR },
  en: { translation: enUS },
  'en-US': { translation: enUS },
} as const

