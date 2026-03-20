import profileImage from '../assets/foto-perfil.jpeg'
import kifomeImage from '../assets/kifome.png'
import habitFlowLandingImage from '../assets/habitflowlanding.png'
import pagpayImage from '../assets/pagpay.png'
import curriculumPdf from '../assets/Currículo.pdf'
import resumeEnglishPdf from '../assets/Resume - English.pdf'

export const SITE_OWNER_NAME = 'Georgia Carin'

export const SOCIAL_LINKS = {
  github: 'https://github.com/GeorgiaSilva',
  linkedIn: 'https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/',
} as const

export const PROFILE = {
  image: profileImage,
  name: SITE_OWNER_NAME,
} as const

export const RESUMES = {
  pt: {
    file: curriculumPdf,
    downloadName: 'Curriculo-Georgia-Carin.pdf',
  },
  en: {
    file: resumeEnglishPdf,
    downloadName: 'Resume-Georgia-Carin.pdf',
  },
} as const

export type ProjectCard = {
  titleKey: string
  descriptionKey: string
  technologiesKeys: string[]
  figmaUrl: string
  color: string
  img: string
}

export const PROJECT_CARDS: ProjectCard[] = [
  {
    titleKey: 'projects.items.kifome.title',
    descriptionKey: 'projects.items.kifome.description',
    img: kifomeImage,
    technologiesKeys: ['projects.technologies.reactNative', 'projects.technologies.figma', 'projects.technologies.uxDesign'],
    figmaUrl: 'https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&p=f&t=iStIoZGqN0aYiFAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    color: '#1e1e2e',
  },
  {
    titleKey: 'projects.items.habitFlowLanding.title',
    descriptionKey: 'projects.items.habitFlowLanding.description',
    img: habitFlowLandingImage,
    technologiesKeys: ['projects.technologies.figma', 'projects.technologies.react', 'projects.technologies.uxDesign'],
    figmaUrl: 'https://www.figma.com/design/9EYh23KfMjrru3nhGpgMPl/HabitFlow-Landing-page?node-id=0-1&t=8U7898mp0UmblPXQ-1',
    color: '#2d2d42',
  },
  {
    titleKey: 'projects.items.pagPay.title',
    descriptionKey: 'projects.items.pagPay.description',
    img: pagpayImage,
    technologiesKeys: ['projects.technologies.figma', 'projects.technologies.reactNative', 'projects.technologies.mobileDesign'],
    figmaUrl: 'https://www.figma.com/proto/ueZChOcIQaijTC1xG0OuZn/PAGPAY?node-id=175-381&p=f&t=ew6q0dg2MebYBfvD-0&scaling=scale-down&content-scaling=fixed&page-id=175%3A90&starting-point-node-id=175%3A381',
    color: '#1a1a2e',
  },
]
