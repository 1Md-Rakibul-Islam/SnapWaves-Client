import { CssBaseline, ThemeProvider } from '@mui/material';
import MainNavBar from './Component/MainNavBAr/MainNavBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Container } from 'postcss';
import { theme } from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App