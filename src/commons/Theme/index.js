import { createTheme } from '@material-ui/core';

const theme = createTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#E64A19',
  },
  typoraphy: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    textColor: '#FFFFFF',
    border: '#CCCCCC',
  },
});
export default theme;
