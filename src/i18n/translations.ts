const ptBR = {
  nav: {
    home: 'Inicio',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
    languageSwitcher: 'Alternar idioma',
    pt: 'PT',
    en: 'EN',
  },
  header: {
    greeting: 'Ola, eu sou a',
    name: 'Georgia Carin',
    role: 'Desenvolvedora Frontend e Designer UX apaixonada por criar experiencias digitais unicas e intuitivas.',
    photoAlt: 'Foto de perfil - Georgia Carin',
  },
  skills: {
    title: 'Minhas Habilidades',
    subtitle: 'Aqui estao algumas das minhas habilidades tecnicas:',
  },
  projects: {
    title: 'Meus Projetos',
    subtitle: 'Confira alguns dos projetos que desenvolvi:',
    items: {
      kifome: {
        title: 'Ki Fome',
        description: 'Aplicativo de pesquisa de restaurantes, bares e lanchonetes perto de voce.',
      },
      habitFlowLanding: {
        title: 'HabitFlow Landing Page',
        description: 'Landing page para o aplicativo HabitFlow, focada em design moderno e responsivo.',
      },
      pagPay: {
        title: 'PagPay',
        description: 'Sistema de pagamento online de boletos, com integracao de APIs de pagamento e interface intuitiva.',
      },
      miniTwitter: {
        title: 'Mini Twitter',
        description: 'Mini rede social para publicacao de posts curtos em tempo real.',
      },
    },
    technologies: {
      reactNative: 'React Native',
      figma: 'Figma',
      uxDesign: 'UX Design',
      react: 'React',
      mobileDesign: 'Mobile Design',
      tailwind: 'Tailwind CSS',
    },
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
    viewDesign: 'prototipo',
    viewFigma: 'Figma',
    viewRepository: 'Repositorio',
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
    name: 'Georgia Carin',
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
    items: {
      kifome: {
        title: 'Ki Fome',
        description: 'Restaurant, bar, and snack place discovery app near you.',
      },
      habitFlowLanding: {
        title: 'HabitFlow Landing Page',
        description: 'Landing page for the HabitFlow app focused on modern and responsive design.',
      },
      pagPay: {
        title: 'PagPay',
        description: 'Online payment system for boletos with payment API integration and an intuitive interface.',
      },
      miniTwitter: {
        title: 'Mini Twitter',
        description: 'Small social feed app for posting short updates in real time.',
      },
    },
    technologies: {
      reactNative: 'React Native',
      figma: 'Figma',
      uxDesign: 'UX Design',
      react: 'React',
      mobileDesign: 'Mobile Design',
      tailwind: 'Tailwind CSS',
    },
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


