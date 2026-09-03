import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Box, Button, Container, Link, Stack, Typography, useTheme as useMuiTheme } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { SITE_OWNER_NAME, SOCIAL_LINKS } from '../config/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from '../components/codeLabel'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()
  const theme = useMuiTheme()
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <Box id='footer' component='footer' sx={{ width: '100%', mt: { xs: 4, md: 8 }, py: { xs: 7, md: 10 }, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #120c1c, #08080e)' : 'linear-gradient(135deg, #faf5ff, #f8fafc)', borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 } }}>
        <Box ref={reveal.ref} className={`scroll-reveal ${reveal.isVisible ? 'visible' : ''}`} sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
          <Typography component='h2' sx={{ fontWeight: 800, fontSize: { xs: '2rem', sm: '2.7rem' }, letterSpacing: '-0.04em', color: 'text.primary' }}>
            {t('footer.title')}
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 590, mx: 'auto', mt: 1.5, lineHeight: 1.65 }}>
            {t('footer.subtitle')}
          </Typography>
          <Button href={SOCIAL_LINKS.linkedIn} target='_blank' rel='noopener noreferrer' variant='contained' endIcon={<ArrowOutwardIcon />} sx={{ mt: 3, px: 2.5, py: 1.2, fontWeight: 700, boxShadow: '0 10px 26px rgba(168, 85, 247, 0.26)' }}>
            {t('footer.contactCta')}
          </Button>
          <Stack direction='row' justifyContent='center' spacing={1} sx={{ mt: 4 }}>
            <Link href={SOCIAL_LINKS.github} target='_blank' rel='noopener noreferrer' aria-label={t('social.github')} sx={{ color: 'text.secondary', p: 1, borderRadius: 2, '&:hover': { color: 'primary.main', backgroundColor: 'rgba(168, 85, 247, 0.09)', transform: 'translateY(-2px)' } }}>
              <GitHub fontSize='large' />
            </Link>
            <Link href={SOCIAL_LINKS.linkedIn} target='_blank' rel='noopener noreferrer' aria-label={t('social.linkedIn')} sx={{ color: 'text.secondary', p: 1, borderRadius: 2, '&:hover': { color: 'primary.main', backgroundColor: 'rgba(168, 85, 247, 0.09)', transform: 'translateY(-2px)' } }}>
              <LinkedIn fontSize='large' />
            </Link>
          </Stack>
          <Typography variant='body2' sx={{ color: 'text.secondary', mt: 4 }}>
            {t('footer.createdBy')}{' '}
            <Link href={SOCIAL_LINKS.linkedIn} target='_blank' rel='noopener noreferrer' sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
              {SITE_OWNER_NAME}
            </Link>{' · '}{t('footer.rightsReserved', { year: currentYear })}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <CodeLabel compact>{'export default GeorgiaCarin'}</CodeLabel>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
