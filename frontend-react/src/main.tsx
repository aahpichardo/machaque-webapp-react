import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from '@mui/material/styles'
import FontsTheme from './components/FontsTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={FontsTheme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
