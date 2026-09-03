import { createRoot } from 'react-dom/client'
import './i18n'
import App from './App.tsx'
import './App.css'
import { ThemeProvider } from './theme/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
