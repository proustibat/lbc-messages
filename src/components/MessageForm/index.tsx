import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Theme,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
  },
  textField: {
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(2),
  },
}));

export type MessageFormProps = {
  onSubmit: (data: { title: string; message: string }) => void;
  loading?: boolean;
};

export const MessageForm = ({
  onSubmit,
  loading = false,
}: MessageFormProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChanges = (inputType: string) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    (inputType === 'title'
      ? setTitle
      : inputType === 'message'
      ? setMessage
      : () => {})(event.target.value);
  };

  const handleSubmit = () => onSubmit({ title, message });

  return (
    <Box className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          id="title"
          label={t('title')}
          value={title}
          data-testid="input-title"
          className={classes.textField}
          variant="outlined"
          type="text"
          fullWidth={true}
          color="primary"
          onChange={handleChanges('title')}
        />
        <TextField
          id="message"
          label={t('message')}
          value={message}
          multiline
          data-testid="input-message"
          rows="4"
          className={classes.textField}
          variant="outlined"
          type="text"
          fullWidth={true}
          color="primary"
          onChange={handleChanges('message')}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading || !(title.length > 0 && message.length > 0)}
          data-testid="submit-button"
        >
          {t('send')}
          {loading ? (
            <CircularProgress className={classes.rightIcon} size={20} />
          ) : (
            <Send className={classes.rightIcon} />
          )}
        </Button>
      </form>
    </Box>
  );
};

export default MessageForm;
