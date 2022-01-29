import { deepPurple, deepOrange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
    error: {
      main: red.A400,
    },
  },
});

export default theme;