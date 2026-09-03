const ptBR = {
  nav: {
    home: 'Início',
    about: 'Sobre mim',
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
    availability: 'Disponível para novas oportunidades',
    viewProjects: 'Ver projetos',
    contactMe: 'Vamos conversar',
  },
  skills: {
    title: 'Minhas Habilidades',
    subtitle: 'Aqui estão algumas das minhas habilidades técnicas:',
  },
  about: {
    eyebrow: 'Um pouco sobre mim',
    title: 'Código com intenção, design com propósito.',
    description: 'Sou desenvolvedora frontend e designer UX. Gosto de transformar ideias em interfaces claras, úteis e agradáveis de usar — cuidando tanto da experiência quanto dos detalhes de implementação.',
    focusTitle: 'Meu foco',
    focus: 'Criar produtos digitais responsivos que aproximem pessoas, objetivos e boas experiências.',
  },
  projects: {
    title: 'Meus Projetos',
    subtitle: 'Confira alguns dos projetos que desenvolvi:',
  },
  footer: {
    createdBy: 'Criado por',
    rightsReserved: '(c) {{year}} Todos os direitos reservados',
    title: 'Vamos criar algo memorável?',
    subtitle: 'Estou sempre aberta a conversar sobre novos projetos, produtos e experiências digitais.',
    contactCta: 'Falar pelo LinkedIn',
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
    seeDetails: 'Ver detalhes',
    hideDetails: 'Ocultar detalhes',
    myRole: 'Minha participação',
  },
}

const enUS = {
  nav: {
    home: 'Home',
    about: 'About',
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
    availability: 'Available for new opportunities',
    viewProjects: 'View projects',
    contactMe: 'Let’s talk',
  },
  skills: {
    title: 'My Skills',
    subtitle: 'Here are some of my technical skills:',
  },
  about: {
    eyebrow: 'A little about me',
    title: 'Code with intent, design with purpose.',
    description: 'I am a frontend developer and UX designer. I enjoy turning ideas into clear, useful, and pleasant-to-use interfaces — caring for both the experience and implementation details.',
    focusTitle: 'My focus',
    focus: 'Creating responsive digital products that bring people, goals, and great experiences closer together.',
  },
  projects: {
    title: 'My Projects',
    subtitle: 'Check out some of the projects I developed:',
  },
  footer: {
    createdBy: 'Created by',
    rightsReserved: '(c) {{year}} All rights reserved',
    title: 'Let’s create something memorable?',
    subtitle: 'I am always open to talking about new projects, products, and digital experiences.',
    contactCta: 'Talk on LinkedIn',
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
    seeDetails: 'See details',
    hideDetails: 'Hide details',
    myRole: 'My role',
  },
}

export const resources = {
  'pt-BR': { translation: ptBR },
  pt: { translation: ptBR },
  en: { translation: enUS },
  'en-US': { translation: enUS },
} as const
