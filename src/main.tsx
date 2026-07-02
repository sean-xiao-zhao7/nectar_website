import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NoAuthLandingPage from './pages/no_auth/NoAuthLandingPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NoAuthLandingPage />
  </StrictMode>,
)
