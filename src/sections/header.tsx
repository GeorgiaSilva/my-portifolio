import { Box, Container, Typography, useTheme as useMuiTheme, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SocialLinks } from '../components/socialLinks'
import { PROFILE } from '../config/siteContent'

export const Header = () => {
  const theme = useMuiTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation()

  return (
    <Box
      id='home'
      sx={{
        width: '100%',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1500px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 3, md: 6, lg: 8 },
          paddingTop: { xs: '80px', sm: '100px', md: '120px', lg: '140px' },
          paddingBottom: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isSmallScreen ? 'center' : '',
            justifyContent: 'center',
            gap: 1,
            width: { xs: '80%', md: '56%' },
            animation: 'slideInLeft 0.8s ease-out',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant='h5'
            component='h2'
            sx={{
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            {t('header.greeting')}
          </Typography>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              paddingBottom: 1,
            }}
          >
            {t('header.name')}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              lineHeight: 1.2,
              width: { xs: '100%', md: '80%' },
              fontSize: { xs: '14px', sm: '16px' },
            }}
          >
            {t('header.role')}
          </Typography>
          <SocialLinks />
        </Box>

        {!isSmallScreen && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '200px', sm: '260px', md: '380px' },
              animation: 'slideInRight 0.8s ease-out',
            }}
          >
            <Box
              component='img'
              src={PROFILE.image}
              alt={t('header.photoAlt')}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                border: 'none',
                boxShadow: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}
