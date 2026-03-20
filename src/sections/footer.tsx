import { Box, Container, Typography, Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <Box
      id='footer'
      component='footer'
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        textAlign: 'center',
        padding: { xs: '16px 0', sm: '20px 0', md: '24px 0' },
        borderTop: 'none',
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 } }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Link
            href='https://github.com/GeorgiaSilva'
            target='_blank'
            rel='noopener'
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <GitHub fontSize='large' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/'
            target='_blank'
            rel='noopener'
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <LinkedIn fontSize='large' />
          </Link>
        </Box>

        <Typography
          variant='body1'
          sx={{
            color: 'text.secondary',
            display: 'block',
            marginBottom: 0.5,
          }}
        >
          {t('footer.createdBy')}{' '}
          <Link
            href='https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/'
            target='_blank'
            rel='noopener'
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Georgia Carin
          </Link>
        </Typography>

        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary',
          }}
        >
          {t('footer.rightsReserved', { year: currentYear })}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
