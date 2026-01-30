import { Box, Link, Typography, useTheme as useMuiTheme, useMediaQuery, Container } from '@mui/material'
import { ToggleTheme } from '../theme/toggleTheme'

export const Navigation = () => {
  const theme = useMuiTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#footer' },
  ]

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'background.default',
        zIndex: 1000,
        boxShadow: 'none',
        padding: { xs: '8px 0', sm: '10px 0', md: '12px 0' },
      }}
    >
      <Container maxWidth="xl">
      <Typography
        variant="body1"
        component="div"
        sx={{
          position: 'absolute',
          left: { xs: '16px', sm: '24px' },
          top: '50%',
          transform: 'translateY(-50%)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: { xs: '1rem', sm: '1.1rem' },
        }}
      >
        GC
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 1.5, sm: 2, md: 3 },
          alignItems: 'center',
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                color: 'primary.main',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: 0,
                height: 1.5,
                backgroundColor: 'primary.main',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          right: { xs: '16px', sm: '24px' },
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ToggleTheme />
      </Box>
      </Container>
    </Box>
  )
}
