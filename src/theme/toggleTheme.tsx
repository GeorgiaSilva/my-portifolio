import { IconButton, Tooltip } from '@mui/material'
import { WbSunny, ModeNight } from '@mui/icons-material'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { useTranslation } from 'react-i18next'

export const ToggleTheme = () => {
  const context = useContext(ThemeContext)
  const { t } = useTranslation()

  if (!context) {
    throw new Error('ToggleTheme must be used within a ThemeProvider')
  }
  const { mode, toggleTheme } = context

  return (
    <Tooltip title={mode === 'dark' ? t('theme.lightMode') : t('theme.darkMode')}>
      <IconButton
        onClick={toggleTheme}
        size='small'
        sx={{
          color: 'text.primary',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          '&:hover': {
            transform: 'rotate(180deg)',
            backgroundColor: 'action.hover',
          },
        }}
      >
        {mode === 'dark' ? <WbSunny fontSize='small' /> : <ModeNight fontSize='small' />}
      </IconButton>
    </Tooltip>
  )
}
