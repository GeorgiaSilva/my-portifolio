import { Box, Link, Typography, useTheme as useMuiTheme, useMediaQuery, Container, Button } from '@mui/material'
import { ToggleTheme } from '../theme/toggleTheme'
import { useTranslation } from 'react-i18next'
import curriculumPdf from '../assets/Currículo.pdf'
import resumeEnglishPdf from '../assets/Resume - English.pdf'

export const Navigation = () => {
  const theme = useMuiTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { t, i18n } = useTranslation()

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#footer' },
  ]

  const isPortuguese = (i18n.resolvedLanguage || i18n.language).startsWith('pt')
  const cvHref = isPortuguese ? curriculumPdf : resumeEnglishPdf
  const cvDownloadName = isPortuguese ? 'Curriculo-Georgia-Carin.pdf' : 'Resume-Georgia-Carin.pdf'
  const handleDownloadCv = async () => {
    try {
      const response = await fetch(cvHref)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = cvDownloadName
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      window.URL.revokeObjectURL(url)
    } catch {
      window.open(cvHref, '_blank', 'noopener,noreferrer')
    }
  }

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
        padding: { xs: '24px 24px', sm: '24px 24px', md: '24px 24px' },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 } }}
      >
        <Typography
          sx={{
            position: 'absolute',
            left: { xs: '16px', sm: '24px' },
            background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: { xs: '1.1rem', sm: '1.5rem' },
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
                fontSize: isMobile ? '14px' : '16px',
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
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Button
            size='small'
            variant='outlined'
            onClick={handleDownloadCv}
            sx={{ minWidth: 36, px: 1.5, fontWeight: 700 }}
          >
            CV
          </Button>

          <Box sx={{ display: 'flex', gap: 0.5 }} aria-label={t('nav.languageSwitcher')}>
            <Button
              size='small'
              variant={isPortuguese ? 'contained' : 'text'}
              onClick={() => i18n.changeLanguage('pt-BR')}
              sx={{ minWidth: 36, px: 1, fontWeight: 700 }}
            >
              {t('nav.pt')}
            </Button>
            <Button
              size='small'
              variant={!isPortuguese ? 'contained' : 'text'}
              onClick={() => i18n.changeLanguage('en')}
              sx={{ minWidth: 36, px: 1, fontWeight: 700 }}
            >
              {t('nav.en')}
            </Button>
          </Box>

          <ToggleTheme />
        </Box>
      </Container>
    </Box>
  )
}
