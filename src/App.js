import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Landing from './pages/Landing';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#fff',
      },
      common: {
        white: '#fff',
        black: '#000',
        pearlAqua: '#90d4c4',
        pictonBlue: '#3FBFFF',
        cyberYellow: '#FFD202',
        tangerineYellow: '#FECE00',
        gray1: 'rgba(0, 0, 0, 0.3)',
        gray2: 'rgba(0, 0, 0, 0.5))',
        gray3: 'rgba(0, 0, 0, 0.7)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        transparentWhite: 'rgba(255, 255, 255, 0.19)',
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Landing />
      </ThemeProvider>
  );
};

export default App;
