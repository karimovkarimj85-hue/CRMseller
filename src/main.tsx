import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './hooks/use-theme'

function routerBasename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/' || base === './') return undefined
  return base.replace(/\/$/, '')
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter basename={routerBasename()}>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
