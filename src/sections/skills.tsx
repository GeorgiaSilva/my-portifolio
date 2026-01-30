import { Box, Container, Grid, Typography, useTheme as useMuiTheme } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'

export const Habilidade = () => {
  const theme = useMuiTheme()

  const skills = [
    { icon: faFigma, name: 'Figma' },
    { icon: faReact, name: 'React' },
    // { icon: faNext, name: 'React Native' }
    { icon: faWordpress, name: 'WordPress' },
    { icon: faAndroid, name: 'Android' },
  ]

  return (
    <Box
      id="skills"
      sx={{
        paddingTop: { xs: '50px', sm: '60px', md: '80px', lg: '100px' },
        paddingBottom: { xs: '50px', sm: '60px', md: '80px', lg: '100px' },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '30px', sm: '40px', md: '50px' },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              marginBottom: 1,
            }}
          >
            Minhas Habilidades
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Aqui estão algumas das minhas habilidades técnicas:
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid
              key={index}
              size={{ xs: 6, sm: 4, md: 2 }}
              sx={{
                display: 'flex',

                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(168, 85, 247, 0.1)'
                    : 'rgb(245, 238, 254)',
                  borderRadius: '8px',
                  padding: { xs: '16px', sm: '20px', md: '24px' },
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '100%',
                  // maxWidth: { xs: '180px', sm: '220px', md: '260px' },
                  transition: 'transform 0.3s ease',
                  border: 'none',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '90px', sm: '110px', md: '130px' },
                    height: { xs: '90px', sm: '110px', md: '130px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    fontSize: { xs: '50px', sm: '60px', md: '70px' },
                    color: theme.palette.mode === 'light' ? '#A855F7' : '#FFFFFF',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <FontAwesomeIcon 
                    icon={skill.icon}
                  
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.mode === 'light' ? '#A855F7' : '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
