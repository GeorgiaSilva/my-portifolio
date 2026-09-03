import { useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Project } from '../components/project'
import { PROJECT_CARDS, type ProjectCard } from '../config/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from '../components/codeLabel'
import { ProjectCaseStudy } from '../components/projectCaseStudy'

export const Projects = () => {
  const { t } = useTranslation()
  const titleReveal = useScrollReveal<HTMLDivElement>()
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null)

  return (
    <Box
      id='projects'
      sx={{
        width: '100%',
        paddingTop: { xs: '50px', sm: '60px', md: '80px', lg: '100px' },
        paddingBottom: { xs: '50px', sm: '60px', md: '80px', lg: '100px' },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 } }}
      >
        <Box
          ref={titleReveal.ref}
          className={`scroll-reveal ${titleReveal.isVisible ? 'visible' : ''}`}
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '30px', sm: '40px', md: '50px' },
          }}
        >
          <CodeLabel>{'<FeaturedProjects />'}</CodeLabel>
          <Typography
            component='h2'
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              marginTop: 1.5,
              marginBottom: 1,
              fontSize: { xs: '20px', sm: '24px', md: '28px' },
            }}
          >
            {t('projects.title')}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: { xs: '14px', sm: '16px' },
            }}
          >
            {t('projects.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          <Grid size={12} sx={{ display: 'flex' }}>
            <Project data={PROJECT_CARDS[0]} index={0} featured onOpen={setSelectedProject} />
          </Grid>
          {PROJECT_CARDS.slice(1).map((project, index) => (
            <Grid
              key={project.title.pt}
              size={{ xs: 12, md: 6 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Project data={project} index={index + 1} onOpen={setSelectedProject} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ProjectCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Box>
  )
}
