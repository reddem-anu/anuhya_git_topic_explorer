import createTheme from '@mui/material/styles/createTheme';

const palette = {
  primary: {
    main: '#1167B1',
  },
  secondary: {
    main: '#333333',
  },
  background: { default: '#fff' },
  text: {
    primary: '#000',
    secondary: '#495057',
    dark: '#fff',
  },
};

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: ['poppins', 'Helvetica', 'Arial'].join(', '),
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
  },
});
