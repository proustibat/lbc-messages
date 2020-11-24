import React from 'react';
import { Fab, Theme } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

export type ButtonPlusProps = {
  onClick: () => void;
  disabled?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }
}));

export const ButtonPlus = ({ onClick, disabled }: ButtonPlusProps) => {
  const classes = useStyles();
  return (
    <Fab className={classes.root} aria-label="add" onClick={onClick} disabled={disabled} data-testid="plus-button">
      <Add />
    </Fab>
  );
};

export default ButtonPlus;
