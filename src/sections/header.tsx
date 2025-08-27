import { Box, Container, Typography } from '@mui/material'
// import { MenuItem } from '../components/menuItem'
import { MenuIcon } from '../components/menuIcon';

export const Header = () => {
    return (
        <Box>
            {/* <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                paddingTop: '20px',
                paddingBottom: '20px',
            }}> */}
                {/* <MenuItem label="Início" />
                <MenuItem label="Projetos" />
                <MenuItem label="Habilidades" /> */}
            {/* </Container> */}
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                paddingTop: '160px',
                paddingBottom: '160px',
            
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 1,
                    width: '50%',
                }}>
                    <Typography variant="h6" component="h2">
                        Eu sou a Geórgia
                    </Typography>
                    <Typography variant="h2" component="h1" sx={{ 
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #8e2de2 10%, #9d89c4ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                     }}>
                        Desenvolvedora
                        Frontend e designer UX.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{
                        color: '#aaa',
                        }}>
                            Olá! Eu sou a Geórgia, uma desenvolvedora frontend e designer UX apaixonada por criar experiências digitais. 
                    </Typography>
                <Box
                sx={{
                    marginTop: '40px',
                    display: 'flex',
 
                    width: '100%',
                    height: '100%',
                }}
                >
                    <MenuIcon />
                </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50%',
                    height: '240px',
                    borderRadius: '240px',

                }}>
                    <Box sx={{
                        borderRadius: '40px',
                        // border: '3px solid #fff',
                        width: '100%',
                        height: '100%',
                    }}>
                    
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}
