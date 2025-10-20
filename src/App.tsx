import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { AppRoutes } from './routes/routes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f3460',
    },
    secondary: {
      main: '#16C79A',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App