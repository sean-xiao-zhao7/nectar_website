import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import NoAuthLandingPage from './pages/no_auth/NoAuthLandingPage'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffd148',
      main: '#ffd148',
      dark: '#886600',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#886600',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <NoAuthLandingPage />
    </StrictMode></ThemeProvider>,
)
