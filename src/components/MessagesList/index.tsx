import React from 'react';
import Message, { MessageProps } from '../Message';
import { Box, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";

export type MessagesListProps = {
  messages: MessageProps[];
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
  },
  counter: {
    textTransform: 'uppercase',
  },
}));

export const MessagesList = ({ messages }: MessagesListProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box className={classes.root}>
      <Typography
        className={classes.counter}
        variant="subtitle1"
        align={messages.length ? 'right' : 'center'}
        data-testid="counter"
      >
        {messages.length
          ? t('messageWithCounter', {count: messages.length})
          : t('empty-list')}
      </Typography>
      {messages.length > 0 && (
        <>
          {messages.map(props => (
            <Message key={props.id} {...props} />
          ))}
        </>
      )}
    </Box>
  );
};

export default MessagesList;
