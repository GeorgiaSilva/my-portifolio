import { Box, Container, Typography, Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

const footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        textAlign: 'center',
        padding: { xs: '24px 0', sm: '30px 0', md: '36px 0' },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Link
            href="https://github.com/GeorgiaSilva"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <GitHub sx={{ fontSize: 24 }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <LinkedIn sx={{ fontSize: 24 }} />
          </Link>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            display: 'block',
            marginBottom: 0.5,
          }}
        >
          Criado por{' '}
          <Link
            href="https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Geórgia Carin
          </Link>
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
          }}
        >
          © {currentYear} Todos os direitos reservados
        </Typography>
      </Container>
    </Box>
  )
}

export default footer
