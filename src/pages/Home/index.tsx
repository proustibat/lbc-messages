import React from 'react';
import Intro from './components/Intro';
import MessagesList from '../../components/MessagesList';
import ButtonPlus from '../../components/ButtonPlus';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(12),
  },
  intro: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  plusButton: {
    position: 'fixed',
    left: 0,
    bottom: theme.spacing(2),
    width: '100%',
  },
  messageList: {
    marginTop: theme.spacing(2),
  },
}));

export const Home = () => {
  const classes = useStyles();

  const handlePlus = () => {
    console.log('handle plus button');
  };

  return (
    <>
      <div className={classes.intro}>
        <Container maxWidth="sm">
          <Intro />
        </Container>
      </div>
      <Container maxWidth="sm" className={classes.root}>
        <Box className={classes.messageList}>
          <MessagesList messages={[]} />
        </Box>
        <Box
          className={classes.plusButton}
          display="flex"
          justifyContent="center"
        >
          <ButtonPlus onClick={handlePlus} />
        </Box>
      </Container>
    </>
  );
};
export default Home;
