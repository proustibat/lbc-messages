import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { Home } from "./pages/Home";
import themes from './themes';
import './i18n';
import { useTranslation } from "react-i18next";

// TODO: give the user the possibility to change theme
// maybe get preferences from dark mode navigator for example
const selectedTheme = themes.Brownwave;

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact={true} children={<Home />} />
          <Route path="*">
            <Container>
              <Paper>
                <Typography variant="h1" align="center">
                  404
                </Typography>
                <Link to="/">{t('go-back-home')}</Link>
              </Paper>
            </Container>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
