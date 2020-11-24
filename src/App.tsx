import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import themes from './themes';
import './i18n';
import { useTranslation } from "react-i18next";

// TODO: give the user the possibility to change theme
// maybe get preferences from dark mode navigator for example
const selectedTheme = themes.Brownwave;

const App = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <main>{t('hello')}</main>
    </ThemeProvider>
  );
};

export default App;
