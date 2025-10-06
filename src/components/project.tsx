import { Box, Container, Grid } from '@mui/material'
import FigmaButton from './figmaButton'
import kifome from '../assets/kifome.png'

interface ProjectProps {

  data: {
    color: string
    title: string
    description: string
    img: string
  }
}


export const Project: React.FC<ProjectProps> = ({ data }) => {
  return (
    <Box sx={{

        alignItems: 'center',
        width: '100vw',
        paddingBlock: '100px',
        backgroundColor: data.color || '#060709',
    }}>
      <Container>
      <Grid container direction="row" spacing={4} >
        <Grid size={7} >

            <img style={{ maxWidth: '100%', height: 'auto' }} src={kifome} alt={data.title} />

        </Grid>
        <Grid size={5} >
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <FigmaButton />
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}
