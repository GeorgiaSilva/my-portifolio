import { useState } from 'react'
import { Box, Button, Card, CardContent, Chip, Collapse, IconButton, Typography } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useTranslation } from 'react-i18next'
import { FaFigma, FaGithub } from 'react-icons/fa'
import type { ProjectCard } from '../config/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from './codeLabel'

interface ProjectProps {
  data: ProjectCard
  index: number
}

export const Project: React.FC<ProjectProps> = ({ data, index }) => {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith('pt') ? 'pt' : 'en'
  const reveal = useScrollReveal<HTMLDivElement>(0.12)
  const [showDetails, setShowDetails] = useState(false)

  const projectLinks = [
    {
      key: 'figma',
      url: data.figmaUrl,
      ariaLabel: t('cta.viewFigma'),
      icon: <FaFigma size={22} />,
    },
    {
      key: 'github',
      url: data.githubUrl,
      ariaLabel: t('cta.viewRepository'),
      icon: <FaGithub size={22} />,
    },
    {
      key: 'live',
      url: data.liveUrl,
      ariaLabel: t('cta.viewLive'),
      icon: <PublicIcon sx={{ fontSize: 24 }} />,
    },
  ]

  const technologies = data.technologies[language]
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean)

  return (
    <Box
      ref={reveal.ref}
      className={`scroll-reveal ${reveal.isVisible ? 'visible' : ''}`}
      sx={{
        width: '100%',
        height: '100%',
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <Card
        sx={{
          height: '100%',
          backgroundColor: 'background.paper',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 8px 22px rgba(15, 23, 42, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: 'rgba(168, 85, 247, 0.55)',
            boxShadow: '0 22px 42px rgba(124, 58, 237, 0.18)',
            '& img': { transform: 'scale(1.06)' },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            paddingTop: '50%',
            backgroundColor: data.color,
            overflow: 'hidden',
            '&::after': {
              content: '""', position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 45%, rgba(15, 8, 28, 0.38))',
              pointerEvents: 'none',
            },
          }}
        >
          <Box
            component='img'
            src={data.img}
            alt={data.title[language]}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 500ms ease',
            }}
          />
          <Box sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1 }}>
            <CodeLabel compact>{data.fileName}</CodeLabel>
          </Box>
        </Box>

        <CardContent
          sx={{
            padding: { xs: 2, sm: 2.5 },
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            flexGrow: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '20px' },
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {data.title[language]}
          </Typography>

          <Typography
            fontSize='16px'
            sx={{
              color: 'text.secondary',
              lineHeight: 1.2,
              flexGrow: 1,
              marginBottom: 2.5,
            }}
          >
            {data.description[language]}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              marginBottom: 2.5,
            }}
          >
            {technologies.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                sx={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  color: 'primary.main',
                  border: '1px solid rgba(168, 85, 247, 0.22)',
                  fontWeight: 600,
                  fontSize: { xs: '10px', sm: '12px' },
                }}
              />
            ))}
          </Box>

          <Button
            onClick={() => setShowDetails((current) => !current)}
            endIcon={<KeyboardArrowDownIcon sx={{ transform: showDetails ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }} />}
            aria-expanded={showDetails}
            sx={{ alignSelf: 'flex-start', mb: 1.5, px: 0, minWidth: 0, color: 'primary.main', fontWeight: 700 }}
          >
            {showDetails ? t('cta.hideDetails') : t('cta.seeDetails')}
          </Button>

          <Collapse in={showDetails} timeout={220} unmountOnExit>
            <Box sx={{ mb: 2.5, p: 1.5, borderLeft: '2px solid', borderColor: 'primary.main', backgroundColor: 'rgba(168, 85, 247, 0.06)', borderRadius: '0 8px 8px 0' }}>
              <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '0.82rem', mb: 0.75 }}>{t('cta.myRole')}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.45, mb: 1 }}>{data.role[language]}</Typography>
              {data.highlights[language].map((highlight) => (
                <Box key={highlight} sx={{ display: 'flex', gap: 0.75, alignItems: 'flex-start', mt: 0.65 }}>
                  <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 17, mt: '2px', flexShrink: 0 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.86rem', lineHeight: 1.45 }}>{highlight}</Typography>
                </Box>
              ))}
            </Box>
          </Collapse>

          <Box
            sx={{
              display: 'flex',
              gap: 1,
              marginTop: 'auto',
              flexWrap: 'wrap',
            }}
          >
            {projectLinks.map((link) =>
              link.url ? (
                <IconButton
                  key={link.key}
                  href={link.url}
                  target='_blank'
                  rel='noopener'
                  aria-label={link.ariaLabel}
                  sx={{
                    border: '1px solid',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    width: 44,
                    height: 44,
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.icon}
                </IconButton>
              ) : null,
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
