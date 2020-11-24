import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import themes from './themes';

// TODO: give the user the possibility to change theme
// maybe get preferences from dark mode navigator for example
const selectedTheme = themes.Brownwave;

const App = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <main>Home page</main>
    </ThemeProvider>
  );
};

export default App;
