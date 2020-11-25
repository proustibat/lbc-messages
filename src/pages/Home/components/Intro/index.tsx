import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

export default Intro;
