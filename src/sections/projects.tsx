import { Box, Container, Grid, Typography } from '@mui/material'
import { Project } from '../components/project'

export const Projects = () => {
  return (
    <Box sx={{
        paddingTop: '100px',
        paddingBottom: '100px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',

        margin: 0,
    }}>
        <Typography variant="h5" component="h2" sx={{
        color: '#fff',
        fontWeight: 'Bold',
        textAlign: 'center',
        marginBottom: '60px',
      }}>Meus Projetos</Typography>
        <Container>
        <Grid container spacing={4} sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          <Grid size={6} >
            <Project color="#0f0716" />
          </Grid>
  
        </Grid>
        </Container>
    </Box>
  )
}
