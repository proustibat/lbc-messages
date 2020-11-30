import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import MessageForm from '../../components/MessageForm';
import Intro from '../../components/Intro';
import { useTranslation } from 'react-i18next';
import ButtonPlus from '../../components/ButtonPlus';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(12),
  },
  formContainer: {
    marginTop: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(4, 0, 2, 0),
  },
  homeButton: {
    position: 'fixed',
    left: 0,
    bottom: theme.spacing(2),
    width: '100%',
  },
}));

export const AddMessage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const handleSubmit = (data: { title: string; message: string }) => {
    console.log(data);
  };

  const handleHomeButton = () => history.push('/');

  return (
    <>
      <Intro />
      <Container maxWidth="sm" className={classes.root}>
        <Typography
          component="h4"
          variant="h5"
          align="center"
          gutterBottom
          display="block"
          className={classes.title}
        >
          {t('add-new-message')}
        </Typography>
        <Box className={classes.formContainer}>
          <MessageForm onSubmit={handleSubmit} />
        </Box>
        <Box
          className={classes.homeButton}
          display="flex"
          justifyContent="center"
        >
          <ButtonPlus onClick={handleHomeButton} />
        </Box>
      </Container>
    </>
  );
};
export default AddMessage;
