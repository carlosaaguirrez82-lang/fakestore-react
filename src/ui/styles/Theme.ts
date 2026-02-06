import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // 1. Negro Elegante para los elementos principales (Botones, AppBar)
    primary: {
      main: '#131313',
      //main: '#556B2F',
      contrastText: '#FFFFFF',
    },
    // 2. Verde Oliva para acentos y elementos secundarios
    secondary: {
      main: '#556B2F',
      //main: '#131313',
      contrastText: '#FFFFFF',
    },
    // 3. Fondo blanco puro para que las imágenes de la API no desentonen
    background: {
      default: '#FFFFFF',
      paper: '#F9F9F9', // Gris muy suave para separar secciones
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#556B2F',
    },
  },
  // 4. Personalización de componentes para el look "Boutique"
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Bordes rectos = Elegancia arquitectónica
          textTransform: 'none', // Evita que todo esté en mayúsculas
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Tarjetas de productos también rectas
        },
      },
    },
  },
});

export default theme;