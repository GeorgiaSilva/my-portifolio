import { Box, Container, Grid, Typography } from '@mui/material'
import figma from '../assets/figma.svg'
import react from "../assets/react.svg"
import wordpress from "../assets/wordpress.svg"
import android from "../assets/android.svg"
export const Habilidade = () => {
//teeste
  return (
    <Box sx={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#0f0716',
      borderRadius: '8px',
    }}>
      <Typography variant="h5" component="h2" sx={{
        color: '#fff',
        fontWeight: 'Bold',
        textAlign: 'center',
      }}>
        Minhas Habilidades
      </Typography>
      <Typography variant="h6" sx={{
        color: '#ccc',
        marginTop: '8px',
        textAlign: 'center',

        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        Aqui estão algumas das minhas habilidades técnicas:
      </Typography>
      <Container> 

        <Grid container spacing={4} >
          {[figma, react, wordpress, android].map((skill, index) => (
          <Grid key={index} size={3} sx={{
            backgroundColor: '#ffffff13',
            borderRadius: '24px',
            padding: '50px',

            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            marginTop: '100px',
            marginBottom: '100px',
          }}>
            <img src={skill} alt="" style={{ width: '140px',  }} />
            <Typography variant="h6" sx={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'Bold',
            }}>
              {skill === figma ? 'Figma' : skill === react ? 'React' : skill === wordpress ? 'WordPress' : 'Android'}
            </Typography>
          </Grid>
        ))}
        </Grid>
      </Container>
    </Box>
  )
}
