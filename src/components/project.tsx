import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Box, Button, Card, CardContent, Chip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { ProjectCard } from '../config/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from './codeLabel'

interface ProjectProps {
  data: ProjectCard
  index: number
  featured?: boolean
  onOpen: (project: ProjectCard) => void
}

export const Project: React.FC<ProjectProps> = ({ data, index, featured = false, onOpen }) => {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith('pt') ? 'pt' : 'en'
  const reveal = useScrollReveal<HTMLDivElement>(0.12)
  const technologies = data.technologies[language].split(',').map((tech) => tech.trim()).filter(Boolean)

  return (
    <Box ref={reveal.ref} className={`scroll-reveal ${reveal.isVisible ? 'visible' : ''}`} sx={{ width: '100%', height: '100%', transitionDelay: `${index * 90}ms` }}>
      <Card
        sx={{
          height: '100%', overflow: 'hidden', display: 'flex', flexDirection: featured ? { xs: 'column', md: 'row' } : 'column', backgroundColor: 'background.paper',
          borderRadius: '20px', border: '1px solid', borderColor: featured ? 'rgba(168, 85, 247, 0.42)' : 'divider',
          boxShadow: featured ? '0 18px 42px rgba(124, 58, 237, 0.15)' : '0 8px 22px rgba(15, 23, 42, 0.06)',
          transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
          '&:hover': { transform: 'translateY(-7px)', borderColor: 'rgba(168, 85, 247, 0.68)', boxShadow: '0 24px 48px rgba(124, 58, 237, 0.2)', '& img': { transform: 'scale(1.05)' } },
        }}
      >
        <Box sx={{ position: 'relative', width: featured ? { md: '58%' } : '100%', minHeight: featured ? { xs: 230, md: 460 } : 230, flexShrink: 0, backgroundColor: data.color, overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: featured ? 'linear-gradient(90deg, transparent 48%, rgba(15, 8, 28, 0.3))' : 'linear-gradient(180deg, transparent 40%, rgba(15, 8, 28, 0.5))', pointerEvents: 'none' } }}>
          <Box component='img' src={data.img} alt={data.title[language]} loading='lazy' sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 500ms ease' }} />
          <Box sx={{ position: 'absolute', top: 14, left: 14, zIndex: 1 }}><CodeLabel compact>{data.fileName}</CodeLabel></Box>
          {featured && <Box sx={{ position: 'absolute', right: 14, bottom: 14, zIndex: 1, px: 1.1, py: 0.5, borderRadius: 1, backgroundColor: 'rgba(15, 8, 28, 0.7)', color: 'white', backdropFilter: 'blur(8px)', fontSize: '0.72rem', fontWeight: 800 }}>{t('projects.featured')}</Box>}
        </Box>

        <CardContent sx={{ p: { xs: 2.5, md: featured ? 4 : 2.75 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
          <Typography sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', mb: 1 }}>{data.kind[language]}</Typography>
          <Typography component='h3' sx={{ color: 'text.primary', fontWeight: 800, fontSize: featured ? { xs: '1.55rem', md: '2rem' } : '1.3rem', letterSpacing: '-0.035em' }}>{data.title[language]}</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, mt: 1.25, maxWidth: featured ? 450 : 'none' }}>{data.description[language]}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 2.25, mb: 2.5 }}>
            {technologies.map((tech) => <Chip key={tech} label={tech} size='small' sx={{ backgroundColor: 'rgba(168, 85, 247, 0.09)', color: 'primary.main', border: '1px solid rgba(168, 85, 247, 0.2)', fontWeight: 700, fontSize: '0.7rem' }} />)}
          </Box>
          <Button onClick={() => onOpen(data)} variant={featured ? 'contained' : 'text'} endIcon={<ArrowOutwardIcon />} sx={{ alignSelf: 'flex-start', px: featured ? 2 : 0, py: featured ? 1.1 : 0.5, fontWeight: 800, boxShadow: featured ? '0 10px 24px rgba(168, 85, 247, 0.22)' : 'none' }}>
            {t('projects.openCaseStudy')}
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}
