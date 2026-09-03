import CloseIcon from '@mui/icons-material/Close'
import PublicIcon from '@mui/icons-material/Public'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Box, Button, Chip, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaFigma, FaGithub } from 'react-icons/fa'
import type { ProjectCard } from '../config/siteContent'
import { CodeLabel } from './codeLabel'

type ProjectCaseStudyProps = {
  project: ProjectCard | null
  onClose: () => void
}

export const ProjectCaseStudy = ({ project, onClose }: ProjectCaseStudyProps) => {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith('pt') ? 'pt' : 'en'
  const technologies = project?.technologies[language].split(',').map((tech) => tech.trim()).filter(Boolean) ?? []
  const links = project ? [
    { key: 'figma', url: project.figmaUrl, label: t('cta.viewFigma'), icon: <FaFigma size={17} /> },
    { key: 'github', url: project.githubUrl, label: t('cta.viewRepository'), icon: <FaGithub size={17} /> },
    { key: 'live', url: project.liveUrl, label: t('cta.viewLive'), icon: <PublicIcon sx={{ fontSize: 18 }} /> },
  ] : []

  return (
    <Drawer
      anchor='right'
      open={Boolean(project)}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 520 }, height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
          backgroundColor: 'background.default',
        },
      }}
    >
      {project && (
        <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', overscrollBehavior: 'contain', scrollbarWidth: 'thin', '&::-webkit-scrollbar': { width: 7 }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'primary.main', borderRadius: 4 } }}>
          <Box sx={{ minHeight: '100%', pb: { xs: 8, sm: 10 } }}>
          <Box sx={{ position: 'relative', height: { xs: 220, sm: 260 }, backgroundColor: project.color, overflow: 'hidden' }}>
            <Box component='img' src={project.img} alt={project.title[language]} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(15, 8, 28, 0.6))' }} />
            <Box sx={{ position: 'absolute', top: 18, left: 20 }}><CodeLabel compact>{project.fileName}</CodeLabel></Box>
            <IconButton onClick={onClose} aria-label='Close case study' sx={{ position: 'absolute', top: 12, right: 14, color: 'white', backgroundColor: 'rgba(15, 8, 28, 0.58)', '&:hover': { backgroundColor: 'rgba(15, 8, 28, 0.82)' } }}><CloseIcon /></IconButton>
          </Box>
          <Box sx={{ px: { xs: 2.5, sm: 4 }, pt: 3.5 }}>
            <Typography sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.kind[language]}</Typography>
            <Typography component='h2' sx={{ color: 'text.primary', fontWeight: 800, fontSize: { xs: '2rem', sm: '2.4rem' }, letterSpacing: '-0.05em', mt: 0.4 }}>{project.title[language]}</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1 }}>{project.description[language]}</Typography>

            <Box sx={{ mt: 2.5 }}>
              <Typography sx={{ color: 'text.primary', fontWeight: 800, mb: 0.8 }}>{t('cta.myRole')}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.55 }}>{project.role[language]}</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ color: 'text.primary', fontWeight: 800, mb: 1 }}>{t('projects.contributions')}</Typography>
              {project.highlights[language].map((highlight) => (
                <Stack key={highlight} direction='row' spacing={1} alignItems='flex-start' sx={{ mt: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 19, mt: '2px' }} />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.55 }}>{highlight}</Typography>
                </Stack>
              ))}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ color: 'text.primary', fontWeight: 800, mb: 1 }}>{t('projects.projectType')}</Typography>
              <Chip label={project.kind[language]} size='small' sx={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', color: 'primary.main', fontWeight: 700 }} />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ color: 'text.primary', fontWeight: 800, mb: 1 }}>{t('projects.stack')}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>{technologies.map((tech) => <Chip key={tech} label={tech} size='small' variant='outlined' sx={{ borderColor: 'rgba(168, 85, 247, 0.35)', color: 'primary.main', fontWeight: 700 }} />)}</Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
              {links.map((link) => link.url ? <Button key={link.key} href={link.url} target='_blank' rel='noopener noreferrer' variant='outlined' startIcon={link.icon} sx={{ fontWeight: 800 }}>{link.label}</Button> : null)}
            </Box>
          </Box>
          </Box>
        </Box>
      )}
    </Drawer>
  )
}
