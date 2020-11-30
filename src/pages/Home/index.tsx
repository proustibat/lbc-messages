import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Container, LinearProgress, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Intro from '../../components/Intro';
import MessagesList from '../../components/MessagesList';
import ButtonPlus from '../../components/ButtonPlus';
import { requestMessages } from '../../state/actions/messagesActions';
import { RootReducersType } from '../../state/reducers';
import { MessageProps } from '../../components/Message';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(12),
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
  const history = useHistory();

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

  const handlePlus = () => history.push('/add');

  useEffect(() => {
    if (!messages || (messages && (messages as MessageProps[])?.length === 0)) {
      dispatch(requestMessages());
    }
  }, [dispatch, messages]);

  return (
    <>
      <Intro />
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
