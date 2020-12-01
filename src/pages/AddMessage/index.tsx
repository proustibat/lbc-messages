import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MessageForm from '../../components/MessageForm';
import Intro from '../../components/Intro';
import FloatingButton, { IconVariant } from '../../components/FloatingButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestMessages,
  sendMessage,
} from '../../state/actions/messagesActions';
import { RootReducersType } from '../../state/reducers';
import { MessageProps } from '../../components/Message';
import { messagesActionTypes as Actions } from '../../state/actionsTypes';

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
  const dispatch = useDispatch();
  const [waiting, setWaiting] = useState<boolean>(false);
  // TODO: refactor to get message in all pages of the app or at least
  //  for both add and home pages (avoid duplicated code with home)
  const [
    messages,
    loadingMessages,
  ] = useSelector(({ messages: { items, loading } }: RootReducersType) => [
    items,
    loading,
  ]);

  const handleSubmit = async (data: { title: string; message: string }) => {
    setWaiting(true);
    const response = await dispatch(sendMessage(data));
    setWaiting(false);
    if (response.type === Actions.SEND_MESSAGE_SUCCESS) {
      history.push('/');
    }
  };

  const handleHomeButton = () => history.push('/');

  useEffect(() => {
    if (!messages || (messages && (messages as MessageProps[])?.length === 0)) {
      dispatch(requestMessages());
    }
  }, [dispatch, messages]);

  return (
    <>
      <Intro />
      {(waiting || loadingMessages) && <LinearProgress />}
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
          {!loadingMessages ? <MessageForm loading={waiting} onSubmit={handleSubmit} /> : '...'}
        </Box>
        <Box
          className={classes.homeButton}
          display="flex"
          justifyContent="center"
        >
          <FloatingButton onClick={handleHomeButton} icon={IconVariant.HOME} disabled={waiting} />
        </Box>
      </Container>
    </>
  );
};
export default AddMessage;
