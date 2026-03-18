import { Box, Container, Grid, Typography } from '@mui/material'
import { Project } from '../components/project'
import kifome from '../assets/kifome.png'
import habitlanding from '../assets/habitflowlanding.png'
const projects = [
  {
    title: 'Ki Fome',
    description: 'Aplicativo de pesquisa de restaurantes, bares e lanchonetes perto de você.',
    img: kifome,
    technologies: ['React Native', 'Figma', 'UX Design'],
    figmaUrl: 'https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&p=f&t=iStIoZGqN0aYiFAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    color: '#1e1e2e',
  },
  {
    title: 'HabitFlow Landing Page',
    description: 'Landing page para o aplicativo HabitFlow, focada em design moderno e responsivo.',
    img: habitlanding,
    technologies: ['Figma', 'React', 'UX Design'],
    figmaUrl: "https://www.figma.com/design/9EYh23KfMjrru3nhGpgMPl/HabitFlow-Landing-page?node-id=0-1&t=8U7898mp0UmblPXQ-1",
    color: '#2d2d42',
  },
  // {
  //   title: 'Finance Tracker',
  //   description: 'Aplicativo de controle financeiro pessoal com gráficos e relatórios detalhados.',
  //   img: null,
  //   technologies: ['React', 'Chart.js', 'Firebase'],
  //   figmaUrl: null,
  //   color: '#1a1a2e',
  // },
  // {
  //   title: 'Travel Planner',
  //   description: 'Planejador de viagens com integração de mapas, itinerários e compartilhamento de experiências.',
  //   img: null,
  //   technologies: ['React Native', 'Node.js', 'MongoDB'],
  //   figmaUrl: null,
  //   color: '#16213e',
  // },
]

export const Projects = () => {
  return (
    <Box
      id="projects"
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
            Meus Projetos
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: { xs: '14px', sm: '16px' },
            }}
          >
            Confira alguns dos projetos que desenvolvi:
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
