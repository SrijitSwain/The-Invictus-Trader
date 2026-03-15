import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import AppRoutes from './Routes'
import { ColorModeProvider } from './ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeProvider>
      <CssBaseline />
      <AppRoutes />
    </ColorModeProvider>
  </StrictMode>,
)
