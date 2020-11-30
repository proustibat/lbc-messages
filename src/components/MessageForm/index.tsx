import React from 'react';
import { Box, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
  },
}));

export const MessageForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return <Box className={classes.root}>youpi</Box>;
};

export default MessageForm;
