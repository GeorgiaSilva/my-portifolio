import { Box, Container, Typography, useTheme as useMuiTheme, useMediaQuery } from '@mui/material'
import { SocialLinks } from '../components/socialLinks'
import perfil from '../assets/foto-perfil.jpeg'

export const Header = () => {
    const theme = useMuiTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box id="home">
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 3, md: 4, lg: 6 },
                    paddingTop: { xs: '100px', sm: '120px', md: '140px', lg: '160px' },
                    paddingBottom: { xs: '60px', sm: '80px', md: '100px', lg: '120px' },
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isSmallScreen ? 'center' : 'flex-start',
                        justifyContent: 'center',
                        gap: 2,
                        width: { xs: '100%', md: '50%' },
                        animation: 'slideInLeft 0.8s ease-out',
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                        }}
                    >
                        Olá, eu sou a
                    </Typography>
                    <Typography
                        variant={isMobile ? 'h3' : 'h2'}
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 50%, #DDD6FE 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: 1.2,
                        }}
                    >
                        Geórgia Carin
                    </Typography>
                    <Typography
                        variant={isMobile ? 'body1' : 'h6'}
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '600px',
                            lineHeight: 1.6,
                        }}
                    >
                        Desenvolvedora Frontend e Designer UX apaixonada por criar experiências digitais únicas e intuitivas.
                    </Typography>
                    <SocialLinks />
                </Box>

                {!isSmallScreen && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: '180px', sm: '220px', md: '300px' },
                            animation: 'slideInRight 0.8s ease-out',
                        }}
                    >
                        <Box
                            component="img"
                            src={perfil}
                            alt="Foto de Perfil - Geórgia Carin"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                border: '3px solid',
                                borderColor: 'primary.main',
                                boxShadow: '0 10px 30px rgba(124, 58, 237, 0.25)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 15px 35px rgba(124, 58, 237, 0.35)',
                                },
                            }}
                        />
                    </Box>
                )}
            </Container>
        </Box>
    )
}
