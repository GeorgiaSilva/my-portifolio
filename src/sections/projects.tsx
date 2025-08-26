import { Box } from '@mui/material'
import { Project } from '../components/project'

export const Projects = () => {
  return (
    <Box sx={{

        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        margin: 0,
    }}>
        <h2>Meus Projetos</h2>
        <Project color="#060709" />
        <Project color="#0f0716" />
    </Box>
  )
}
