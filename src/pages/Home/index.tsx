import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, LinearProgress } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Intro from './components/Intro';
import MessagesList from '../../components/MessagesList';
import ButtonPlus from '../../components/ButtonPlus';
import { requestMessages } from '../../state/actions/messagesActions';
import { RootReducersType } from '../../state/reducers';
import { MessageProps } from '../../components/Message';

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
  skeleton: {
    marginBottom: theme.spacing(1),
  },
}));

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [
    messages,
    isLoadingMessages,
  ] = useSelector(({ messages: { items, loading } }: RootReducersType) => [
    items,
    loading,
  ]);

  const renderLoading = () => (
    <>
      <LinearProgress />
      {Array.from({ length: 20 }).map((_, i) => (
        <Skeleton
          key={i}
          className={classes.skeleton}
          variant="text"
          animation="wave"
        />
      ))}
    </>
  );

  const handlePlus = () => {
    console.log('handle plus button');
  };

  useEffect(() => {
    dispatch(requestMessages());
  }, [dispatch]);

  return (
    <>
      <div className={classes.intro}>
        <Container maxWidth="sm">
          <Intro />
        </Container>
      </div>
      <Container maxWidth="sm" className={classes.root}>
        <Box className={classes.messageList}>
          {isLoadingMessages ? (
            renderLoading()
          ) : (
            <MessagesList messages={messages as MessageProps[]} />
          )}
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
