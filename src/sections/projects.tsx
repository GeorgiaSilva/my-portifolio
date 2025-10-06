import { Box, Grid, Typography } from '@mui/material'
import { Project } from '../components/project'

const data = [
  {
    color: '#060709',
    title: 'Ki Fome',
    description: '  Ki fome é um aplicativo de pesquisa de restaurantes, bares e lanchonetes perto de você.',
    img: "src/assets/kifome.png"
  },

]
export const Projects = () => {
  return (
    <Box sx={{
        paddingTop: '100px',
        paddingBottom: '100px',
        alignItems: 'center',
        width: '100vw',
      }}>
      <Typography variant="h5" component="h2" sx={{
      color: '#fff',
      fontWeight: 'Bold',
      textAlign: 'center',

    }}>Meus Projetos</Typography>
        <Grid container  direction="column"  sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          {data.map((project, index) => (
            <Grid size={12} key={index}>
              <Project data={project} />
            </Grid>
          ))}

  
  
        </Grid>
    </Box>
  )
}
