import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  intro: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
}));

export const Intro = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.intro}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
          display="block"
        >
          {t('home-title')}
        </Typography>
        <Typography
          component="p"
          variant="h6"
          align="center"
          color="textSecondary"
        >
          {t('home-intro')}
        </Typography>
      </Container>
    </div>
  );
};

export default Intro;
