import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#237804',
      light: '#389e0d'
    },
    white: '#ffffff',
    lightgrey: '#d9d9d9',
    darkgrey: '#8c8c8c'
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;
