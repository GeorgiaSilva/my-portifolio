import { useEffect, useState } from 'react'
import {
  Box, Button, Container, Divider, Drawer, IconButton, Link, List, ListItemButton,
  ListItemText, Typography, useMediaQuery, useTheme as useMuiTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ToggleTheme } from '../theme/toggleTheme'
import { useTranslation } from 'react-i18next'
import { RESUMES } from '../config/siteContent'

const sectionIds = ['home', 'about', 'skills', 'projects', 'footer']

export const Navigation = () => {
  const theme = useMuiTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { t, i18n } = useTranslation()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: t('nav.home'), href: '#home' },
    { id: 'about', label: t('nav.about'), href: '#about' },
    { id: 'skills', label: t('nav.skills'), href: '#skills' },
    { id: 'projects', label: t('nav.projects'), href: '#projects' },
    { id: 'footer', label: t('nav.contact'), href: '#footer' },
  ]

  const isPortuguese = (i18n.resolvedLanguage || i18n.language).startsWith('pt')
  const cvHref = isPortuguese ? RESUMES.pt.file : RESUMES.en.file
  const cvDownloadName = isPortuguese ? RESUMES.pt.downloadName : RESUMES.en.downloadName

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <Box
      component='nav'
      aria-label='Main navigation'
      sx={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: isScrolled ? (theme.palette.mode === 'dark' ? 'rgba(6, 7, 9, 0.78)' : 'rgba(248, 250, 252, 0.8)') : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: '1px solid', borderColor: isScrolled ? (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.07)') : 'transparent',
        transition: 'background-color 250ms ease, backdrop-filter 250ms ease, border-color 250ms ease',
      }}
    >
      <Container maxWidth={false} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1500px', py: { xs: 1.5, md: 1.75 }, px: { xs: 2, sm: 3, md: 5 } }}>
        <Link href='#home' aria-label={t('nav.home')} underline='none' sx={{ display: 'inline-flex', color: 'primary.main', p: '4px 8px', borderRadius: 2, fontSize: { xs: '1.1rem', sm: '1.3rem' }, fontWeight: 800, letterSpacing: '-0.08em', '&:hover': { backgroundColor: 'rgba(168, 85, 247, 0.1)' } }}>
          GC
        </Link>

        {!isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { sm: 2, md: 3 }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                sx={{
                  position: 'relative', color: activeSection === item.id ? 'primary.main' : 'text.primary', textDecoration: 'none', fontSize: '0.95rem', fontWeight: activeSection === item.id ? 700 : 500,
                  '&::after': { content: '""', position: 'absolute', bottom: -7, left: 0, width: activeSection === item.id ? '100%' : 0, height: 2, borderRadius: 2, backgroundColor: 'primary.main', transition: 'width 220ms ease' },
                  '&:hover': { color: 'primary.main' }, '&:hover::after': { width: '100%' },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.25, sm: 0.75 } }}>
          <Button size='small' variant='outlined' onClick={handleDownloadCv} sx={{ minWidth: 36, px: { xs: 1, sm: 1.5 }, fontWeight: 700 }}>CV</Button>
          <Button size='small' onClick={() => i18n.changeLanguage(isPortuguese ? 'en' : 'pt-BR')} sx={{ minWidth: 36, px: { xs: 0.75, sm: 1 }, fontWeight: 700 }}>
            {isPortuguese ? t('nav.en') : t('nav.pt')}
          </Button>
          <ToggleTheme />
          {isMobile && (
            <>
              <IconButton aria-label='Open navigation menu' onClick={() => setIsDrawerOpen(true)}><MenuIcon /></IconButton>
              <Drawer anchor='right' open={isDrawerOpen} onClose={closeDrawer}>
                <Box sx={{ width: 290, p: 2.5 }} role='presentation'>
                  <Typography sx={{ fontWeight: 800, mb: 1 }}>GC</Typography>
                  <Divider sx={{ mb: 1 }} />
                  <List>
                    {navItems.map((item) => (
                      <ListItemButton key={item.id} component='a' href={item.href} selected={activeSection === item.id} onClick={closeDrawer} sx={{ borderRadius: 2, mb: 0.5 }}>
                        <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: activeSection === item.id ? 700 : 500 }} />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}
