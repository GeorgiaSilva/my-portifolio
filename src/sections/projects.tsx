import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Project } from '../components/project'
import { PROJECT_CARDS } from '../config/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from '../components/codeLabel'

export const Projects = () => {
  const { t } = useTranslation()
  const titleReveal = useScrollReveal<HTMLDivElement>()

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

        <Grid container spacing={3}>
          {PROJECT_CARDS.map((project, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: PROJECT_CARDS.length === 1 ? 4 : 4 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Project data={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
