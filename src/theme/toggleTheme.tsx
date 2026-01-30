import { IconButton, Tooltip } from '@mui/material'
import { WbSunny, ModeNight } from '@mui/icons-material'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export const ToggleTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('ToggleTheme must be used within a ThemeProvider')
  }
  const { mode, toggleTheme } = context

  return (
    <Tooltip title={mode === 'dark' ? 'Modo claro' : 'Modo escuro'}>
      <IconButton
        onClick={toggleTheme}
        size="small"
        sx={{
          color: 'text.primary',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          '&:hover': {
            transform: 'rotate(180deg)',
            backgroundColor: 'action.hover',
          },
        }}
      >
        {mode === 'dark' ? <WbSunny fontSize="small" /> : <ModeNight fontSize="small" />}
      </IconButton>
    </Tooltip>
  )
}
