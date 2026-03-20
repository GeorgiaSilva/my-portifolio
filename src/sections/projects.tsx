import { Box, Container, Grid, Typography } from '@mui/material'
import { Project } from '../components/project'
import kifome from '../assets/kifome.png'
import habitlanding from '../assets/habitflowlanding.png'
import pagpay from '../assets/pagpay.png'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    titleKey: 'projects.items.kifome.title',
    descriptionKey: 'projects.items.kifome.description',
    img: kifome,
    technologiesKeys: ['projects.technologies.reactNative', 'projects.technologies.figma', 'projects.technologies.uxDesign'],
    figmaUrl: 'https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&p=f&t=iStIoZGqN0aYiFAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    color: '#1e1e2e',
  },
  {
    titleKey: 'projects.items.habitFlowLanding.title',
    descriptionKey: 'projects.items.habitFlowLanding.description',
    img: habitlanding,
    technologiesKeys: ['projects.technologies.figma', 'projects.technologies.react', 'projects.technologies.uxDesign'],
    figmaUrl: 'https://www.figma.com/design/9EYh23KfMjrru3nhGpgMPl/HabitFlow-Landing-page?node-id=0-1&t=8U7898mp0UmblPXQ-1',
    color: '#2d2d42',
  },
  {
    titleKey: 'projects.items.pagPay.title',
    descriptionKey: 'projects.items.pagPay.description',
    img: pagpay,
    technologiesKeys: ['projects.technologies.figma', 'projects.technologies.reactNative', 'projects.technologies.mobileDesign'],
    figmaUrl: 'https://www.figma.com/proto/ueZChOcIQaijTC1xG0OuZn/PAGPAY?node-id=175-381&p=f&t=ew6q0dg2MebYBfvD-0&scaling=scale-down&content-scaling=fixed&page-id=175%3A90&starting-point-node-id=175%3A381',
    color: '#1a1a2e',
  },
]

export const Projects = () => {
  const { t } = useTranslation()

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
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '30px', sm: '40px', md: '50px' },
          }}
        >
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 700,
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
          {projects.map((project, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: projects.length === 1 ? 4 : 4 }}
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
